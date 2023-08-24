// const obj1 = {name:'youngzx',age:22}
// const obj2 = obj1;
// obj2.name = 'another guy'
// console.log("obj1",obj1)
// console.log("obj2",obj2)


// const obj3 = {name:'youngzx',age:22}
// const obj4 = {...obj3,name:'another guy'}
// console.log("obj1",obj3)// obj1 { name: 'youngzx', age: 22 }
// console.log("obj2",obj4)// obj2 { name: 'another guy', age: 22 }



// 使用Object.assign()或展开运算符：为了避免修改现有对象，你可以使用Object.assign()方法或ES6的展开运算符来创建新的对象。这些方法会将现有对象的属性复制到一个新的对象中，而不会修改原始对象。
// const originalObject = { key: "value" };
// const newObject = Object.assign({}, originalObject, { anotherKey: "anotherValue" });
// console.log(originalObject)//{ key: 'value' }
// console.log(newObject)//{ key: 'value', anotherKey: 'anotherValue' }
// // 或者使用展开运算符
// const newObject = { ...originalObject, anotherKey: "anotherValue" };


// const originalObject = 
//   { key: "value",deepKey: {
//     deepKey1: "deepValue1",
//     deepKey2: "deepValue2"
//   }};
// // 或者使用展开运算符
// const newObject = { ...originalObject, deepKey: { ...originalObject.deepKey, deepKey2: "deepValue3" } };
// console.log("originalObject",originalObject)//originalObject {key: 'value',deepKey: { deepKey1: 'deepValue1', deepKey2: 'deepValue2' }}
// console.log("newObject",newObject)//newObject {key: 'value',deepKey: { deepKey1: 'deepValue1', deepKey2: 'deepValue3' }}



// 判断是否是计划中的普通对象
function isPlainObject(value) {
  if (value === null || typeof value !== "object") return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function produce(target, callback) {
  const proxies = new WeakMap(); // 用于存储被代理的对象，key 为原对象，value 为代理对象
  const copies = new WeakMap(); // 用于缓存被修改的对象，key 为原对象，value 为修改后的对象

  function getSource(target) {
    return copies.get(target) || target;
  }

  const handler = {
    get(target, key) {
      const source = getSource(target);
      return createProxy(source[key]);
    },
    set(target, key, val) {
      const copy = copySource(target);
      copy[key] = val;
      return true;
    },
  };

  function copySource(target) {
    if (!copies.has(target)) {
      const copy = Array.isArray(target) ? [...target] : { ...target };
      copies.set(target, copy);
      return copy;
    }

    return copies.get(target);
  }

  function createProxy(target) {
    if (isPlainObject(target) || Array.isArray(target)) {
      if (!proxies.has(target)) {
        const proxy = new Proxy(target, handler);
        proxies.set(target, proxy);
        return proxy;
      } else {
        return proxies.get(target);
      }
    }
    return target;
  }

  function hasChange(target) {
    if (!proxies.has(target)) {
      // 没有被代理，说明没有修改过子对象
      return false;
    }
    if (copies.has(target)) {
      // 如果被复制了，则说明当前对象被修改了
      return true;
    }
    const keys = Object.keys(target);
    for (let i = 0; i < keys.length; i++) {
      const value = target[keys[i]];
      // 对象或者数组需要再次使用 hasChange 递归检查。
      if ((Array.isArray(value) || isPlainObject(value)) && hasChange(value)) {
        return true;
      }
    }
    // 其他数据类型都是原始类型，不要判断，直接返回 false。
    return false;
  }

  function finalize(target) {
    if (isPlainObject(target) || Array.isArray(target)) {
      if (!hasChange(target)) {
        return target;
      }
      const copy = copySource(target);
      if (Array.isArray(copy)) {
        // 数组处理方式，检查子节点
        copy.forEach((value, index) => {
          copy[index] = finalize(copy[index]);
        });
      } else {
        // 普通对象处理方式，检查子属性值
        Object.keys(copy).forEach((prop) => {
          copy[prop] = finalize(copy[prop]);
        });
      }
      return copy;
    }
    return target;
  }

  const proxy = createProxy(target);
  callback(proxy);
  return finalize(target);
}

const obj = {
  a: {},
  b: [1, 2, 3],
  c: {
    d: {
      e: [3, 4, 5],
      f: 6,
    },
    f: 7,
  },
};

const copy = produce(obj, () => {
  // nothing to do
});

const modified = produce(obj, (draft) => {
  draft.b.push(4);
  draft.c.f = 8;
});

console.log(copy === obj); // true
console.log(modified === obj); // false
console.log(modified.a === obj.a); // true
console.log(modified.b === obj.b); // false
console.log(modified.c === obj.c); //false
console.log(modified.c.d === obj.c.d); // true