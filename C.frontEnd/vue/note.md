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

## 7、使用 bind 动态绑定 class

## 8、条件渲染

- 用 key 管理可复用的元素
  - 没有 key 的情况，vue 不会重复渲染复用的 dom

  ```html
  <template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username">
  </template>
  <template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address">
  </template>
  ```

  - Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 `key` attribute

  ```html
  <!-- 需要注意的是label会被复用，因为他没有加key -->
  <template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username" key="username-input">
  </template>
  <template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address" key="email-input">
  </template>
  ```

- v-show
  - 另一个用于根据条件展示元素的选项是 v-show 指令。用法大致一样：
  - 不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS property display。
  - 注意，v-show 不支持 template 元素，也不支持 v-else
  - v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
  - v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
  - 相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
  - 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

## 9、列表渲染

- 使用v-for渲染li
  - 不仅可以渲染数组还可以渲染对象，item in obj
  - 给 bind 一个 key 属性会更加高效
  - 不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。
  - 变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 filter()、concat() 和 slice()。它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组
  - 用计算属性缓存，计算属性的函数并没有在模板中被直接执行。实际上，计算属性的函数只有在计算属性被访问时才会执行。

    ```html
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
    ```

- 对template使用v-for可以达到react map 的形式

  ```html
  <ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>

</ul>
  ```

- v-for与v-if一起使用
  - 当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。当你只想为部分项渲染节点时，这种优先级的机制会十分有用，

  ```html
  <li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
  </li>
  ```

- 自定义组件里使用 v-for
  - 然而，任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用 prop
  - 注意这里的 is="todo-item" attribute。这种做法在使用 DOM 模板时是十分必要的，因为在 <ul> 元素内只有 <li> 元素会被看作有效内容。这样做实现的效果与 <todo-item> 相同，但是可以避开一些潜在的浏览器解析错误。

  ```html
  <div id="todo-list-example">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
      >
      <button>Add</button>
    </form>
    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
  </div>
  <script>
  Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
  })

  new Vue({
    el: '#todo-list-example',
    data: {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
  </script>
  ```

## 10、事件处理

- v-on:click="doSomethingFunc" 的形式绑定事件处理函数
- 可以传递dom：v-on:click="doSomethingFunc(here is my $event)"
- 在事件处理程序中调用 event.preventDefault 是常见的形式，但vue使用了事件修饰符
  - .stop：`<a v-on:click.stop="doThis"></a>`
  - .prevent
  - .capture
  - .self
  - .once
  - .passive
- 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
- once只触发一次:`<a v-on:click.once="doThis"></a>`
- 按键修饰符

  ```html
  <input v-on:keyup.enter="submit">
  <input v-on:keyup.page-down="onPageDown">
  ```

- 系统修饰符键：.ctrl,.alt,.shift,.meta,.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

## 11、表单输入

- 对于需要使用输入法 (如中文、日文、韩文等) 的语言，你会发现 v-model 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 input 事件。
- 单选按钮：单个复选框，绑定到布尔值，多个复选框，绑定到同一个数组

```html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
<script>
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
</script>
```

- 输入框修饰符
  - .lazy
  在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步：

  <!-- 在“change”时而非“input”时更新 -->
  `<input v-model.lazy="msg">`

  - .number
  如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：

  `<input v-model.number="age" type="number">`

  这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat() 解析，则会返回原始的值。

  - .trim
  如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：

  `<input v-model.trim="msg">`

## 12、组件基础

- 自定义组件的名称必须是 kebab-case（短横线分隔命名，例如 my-component
- 如果使用了三个相同个组件名的组件，他们的data是独立的
- 组件的data必须是一个函数:因此每个实例可以维护一份被返回对象的独立的拷贝

```js
data: function () {
  return {
    count: 0
  }
}
```

- 组件树->组件注册：全局注册和局部注册
  - 全局注册在vue实例里都是通用的，但是会增加无效组件打包的开销
  - 局部注册：我们可以通过js文件来编写组件`var ComponentA = { /* ... */ }`,然后在components选项中定义我们想要使用的组件
  - 组件也可以互相嵌套

  ```js
    new Vue({
    el: '#app',
    components: {
      'component-a': ComponentA,
      'component-b': ComponentB
    }
  })
  ```

- prop：Prop 是你可以在组件上注册的一些自定义 attribute。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property
- 当然不仅可以传一个属性还可以传一个复杂的对象在组件里解析

```html
<script>
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
</script>
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

- 监听子组件事件:与父组件通信
  - $emit：是 Vue 实例中的一个方法，用于触发当前实例上的自定义事件。它接受两个参数
  - 使用事件抛出一个值：例如我们可能想让 <blog-post> 组件决定它的文本要放大多少。这时可以使用 $emit 的第二个参数来提供这个值，后当在父级组件监听这个事件的时候，我们可以通过 $event 访问到被抛出的这个值
  - 如果这个事件处理函数是一个方法：那么这个值将会作为第一个参数传入这个方法：

```html
<body>
  <div id="app">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <mycomponent 
      v-for="post in posts"
      :post="post"
      :key="post.id"
      v-on:enlarge-text="postFontSize += 0.1"
      ></mycomponent>
    </div>
  </div>
</body>
<script>
  Vue.component('mycomponent', {
    template: `
        <div class="blog-post">
        <h3>{{ post.id }}</h3>
        <div>{{ post.title }}</div>
        <button v-on:click="$emit('enlarge-text')">
          Enlarge text
        </button>
      </div>
    `,
    props: ['post','id','postFontSize']
  })
  new Vue({ el: '#app',
    data:{
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1
    } 
  })
</script>
```

- 在组件上使用 v-model

```html
<input v-model="searchText">
<!-- 等价 -->
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>
<!-- 所以当组件写成如下形式的时候就可以使用v-model了 -->
<script>
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
</script>
<custom-input v-model="searchText"></custom-input>
```

- 通过插槽分发内容:类似react放在组件内部的东西会变成children

```html
<alert-box>
  Something bad happened.
</alert-box>
<script>
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
</script>
```

- 动态组件:is,类似useEffect监听事件

```html
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
 <body>
    <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>

    <script>
      Vue.component("tab-home", {
        template: "<div>Home component</div>"
      });
      Vue.component("tab-posts", {
        template: "<div>Posts component</div>"
      });
      Vue.component("tab-archive", {
        template: "<div>Archive component</div>"
      });

      new Vue({
        el: "#dynamic-component-demo",
        data: {
          currentTab: "Home",
          tabs: ["Home", "Posts", "Archive"]
        },
        computed: {
          currentTabComponent: function() {
            return "tab-" + this.currentTab.toLowerCase();
          }
        }
      });
    </script>
  </body>
```

- 解析 DOM 模板时的注意事项
  - 有些 HTML 元素，诸如 `<ul>`、`<ol>`、`<table>` 和 `<select>`，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 `<li>`、`<tr>` 和 `<option>`，只能出现在其它某些特定的元素内部。
  - 这个自定义组件 `<blog-post-row>` 会被作为无效的内容提升到外部，并导致最终渲染结果出错。幸好这个特殊的 is attribute 给了我们一个变通的办法
  - 需要注意的是如果我们从以下来源使用模板的话，这条限制是不存在的：字符串 (例如：template: '...')单文件组件 (.vue)`<script type="text/x-template">`

```html
<table>
  <blog-post-row></blog-post-row>
</table>
<table>
  <tr is="blog-post-row"></tr>
</table>
```

## 13、深入了解组件
