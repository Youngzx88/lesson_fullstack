# Vue

## 1、入门

- vue 的简单实用

```html
<body>
  <div id="app-4">
    <ol>
      <li v-for="(todo,index) in todos" v-on:click="reverseMessage(index)">
        {{ todo.text }}
      </li>
    </ol>
    <input v-model="message" />
    <!-- v-bind用于绑定todos的item,需要一个唯一标识的key-->
    <todo-item
      v-for="(item,index) in todos"
      v-bind:todo="item"
      v-bind:key="item.index"
    >
    </todo-item>
  </div>
  <!-- <button > here is button </button> -->
</body>
<script>
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>',
  })
  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' },
      ],
      message: '123',
    },
    methods: {
      reverseMessage: function (index) {
        this.todos[index].text = this.todos[index].text
          .split('')
          .reverse()
          .join('')
      },
    },
  })
</script>
```

- v-if,控制显示
- v-for,控制循环
- v-on:click,在 methods 里写方法
- v-model：轻松实现表单输入和应用状态之间的双向绑定
- vue 注册组件
- v-bind 指令将待办项传到循环输出的每个组件中

## 2、Vue 实例

- Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 $，以便与用户定义的 property 区分开来

```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data,
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法-watch比较重要
vm.$watch('a', function (newValue, oldValue) {})
```

- create、mounted、updated 和 destroyed。生命周期钩子的 this 上下文指向调用它的 Vue 实例。
- 不要在选项 property 或回调上使用箭头函数，比如如下，因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误

```js
created: () => console.log(this.a)
vm.$watch('a', (newValue) => this.myMethod())
```

- 生命周期

![alt](https://v2.cn.vuejs.org/images/lifecycle.png)

## 3、模版语法

- 双括号写法

```js
<span>Message: {{ msg }}</span>
```

- v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定

```js
<span v-once>这个将不会改变: {{ msg }}</span>
```

- 双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令

```js
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
// Using mustaches: <span style="color: red">This should be red.
// Using v-html directive: This should be red.
```

## 4、指令

- 指令 (Directives) 是带有 `v-` 前缀的特殊 `attribute`。指令 `attribute` 的值预期是`单个 JavaScript 表达式` (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 `DOM`。
- v-if 匹配 v-else:接受一个 bool 值
- v-show 不会改变 dom，v-if 会
- 一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML attribute，`<a v-bind:href="url">click me</a>`，这句话就是把`a`标签的`href属性`的值设置为`url`
- 指令的`动态参数`：从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数`<a v-bind:[attributeName]="url"> ... </a>`
- `修饰符`:是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
- 缩写

  - bind

    ```js
    <a v-bind:href="url">...</a>

    <!-- 缩写 -->
    <a :href="url">...</a>
    ```

  - on

    ```js
    <!-- 完整语法 -->
    <a v-on:click="doSomething">...</a>

    <!-- 缩写 -->
    <a @click="doSomething">...</a>
    ```

## 5、计算属性

- 模版内的表达式不要做太多复杂的计算，对于任何复杂逻辑，都应当使用计算属性。

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
<script>
  var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello',
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      },
    },
  })
</script>
```

- 我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数。

- 默认只有 getter，也可以加 setter

```js
<body>
  <div id="app">
    <div>原价：{{price}}</div>
    <div>折扣：{{discountPrice*100}}%</div>
    <div>最终价格：{{lastPrice}}</div>
    <div>最终价格2：{{lastPrice2}}</div>
  </div>
</body>
<script>
  const vue = new Vue({
    el: '#app',
    data: {
      price: 100,
      discountPrice: 0.88,
    },
    computed: {
      lastPrice: function () {
          return this.price * this.discountPrice
      },
      lastPrice2: {
        get:function () {
          return this.price * this.discountPrice
        },
      }
    }
  })
</script>
```

## 6、侦听属性

- 当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar',
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    },
  },
})
```

- watch 类似 useEffect

```js
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
            var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})
</script>
```
