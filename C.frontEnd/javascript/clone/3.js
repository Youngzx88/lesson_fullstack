//deepClone
var obj = {
  name: 'yzx',
  age: 18,
  children: {
    first: "one",
    second: "second",
    third: "third",
    inner: {
      here: "here is inner"
    }
  },
  books: ["b1","b2","b3"]
}

var obj2 = JSON.parse(JSON.stringify(obj));
obj2.children.fourth = "fourth"
obj2.children.inner.there = "there"
obj2.books.push("xxx")

console.log("obj",obj)
console.log("obj2",obj2)