# babel

## 1. 简介

- babel 的编译流程就是 parse、transform、generate 3步， parse 是把源码转成 AST，transform 是对 AST 的转换，generate 是把 AST 转成目标代码，并且生成 sourcemap。
- 在 transform 阶段，会应用各种内置的插件来完成 AST 的转换。内置插件做的转换包括两部分，一是把不支持的语法转成目标环境支持的语法来实现相同功能，二是不支持的 api 自动引入对应的 polyfill。
- babel 的编译流程和目的从没有变过，但是完成这个目的的方式却变化很大，我们来回顾一下 babel 6，babel 7都是怎么设计的，babel 8 又会怎么做，或许能帮你真正理解 babel。
- 源码-(parse)->AST-(transform)->转换后的AST-(generate)->目标代码,并生成sourcemap

## 2. babel6

- 新的语法和 api 进入 es 标准也是有个过程的，这个过程分为这几个阶段：

  - 阶段 0 - Strawman: 只是一个想法，可能用 babel plugin 实现
  - 阶段 1 - Proposal: 值得继续的建议
  - 阶段 2 - Draft: 建立 spec
  - 阶段 3 - Candidate: 完成 spec 并且在浏览器实现
  - 阶段 4 - Finished: 会加入到下一年的 es20xx spec

- 有这么多特性要 babel 去转换，每个特性用一个 babel 插件来做。但是特性多啊，也就是说插件多，总不能让用户自己去配一个个插件吧，所以 babel 6 引入了 preset 的概念，就是 plugin 的集合。
- 如果我们想用 es6 语法就用 babel-preset-es2015，es7 就在引入 babel-preset-es2016 等等。如果是想用还没加入标准的特性，则分别用 babel-preset-stage0、babel-preset-stage1 等来引入。这样通过选择不同的 preset，加上手动引入一些插件，就是所有 babel 会做的转换。

## 3. babel 7

- babel 7 改动挺大的，比如所有的包都迁移到了 @babel 的 scope 下，也就是 @babel/xxx，这些我们不管，只看 babel 7 是怎么解决 babel 6 的问题的，

- babel 7 废弃了 preset-20xx 和 preset-stage-x 的 preset 包，而换成了 preset-env，preset-env 默认会支持所有 es 标准的特性，如果没进入标准的，不再封装成 preset，需要手动指定 plugin-proposal-xxx。

- 多转换了一些环境支持的特性，这个问题是怎么解决的呢？
  - 答案是 compat-table，它给出了每个特性在不同浏览器或者 node 环境中的最低支持版本，babel 基于这个自己维护了一份数据库，在 @babel/compat-data 下。
  - 有了这些数据，那么只要用户指定他的目标环境是啥就可以了，这时候可以用 browserslist 的 query 来写，比如 last 1 version, > 1% 这种字符串，babel 会使用 brwoserslist 来把它们转成目标环境具体版本的数据。
  - 有了不同特性支持的环境的最低版本的数据，有了具体的版本，那么过滤出来的就是目标环境不支持的特性，然后引入它们对应的插件即可。这就是 preset-env 做的事情。

  ```ts
  {
      "presets": [["@babel/preset-env", { "targets": "> 0.25%, not dead" }]]
  }
  ```

  - 不再手动引入 polyfill，那么怎么引入？ 当然是用 preset-env 自动引入了。但是也不是默认就会启用这个功能，需要配置。

  ```ts
  {
      "presets": [["@babel/preset-env", { 
          "targets": "> 0.25%, not dead",
          "useBuiltIns": "usage",// or "entry" or "false"
          "corejs": 3
      }]]
  }
  ```

  - 配置下 corejs 和 useBuiltIns。
    - corejs 就是 babel 7 所用的 polyfill，需要指定下版本，corejs 3 才支持实例方法（比如 Array.prototype.fill ）的 polyfill。
    - useBuiltIns 就是使用 polyfill （corejs）的方式，是在入口处全部引入（entry），还是每个文件引入用到的（usage），或者不引入（false）。
  - 配置了这两个 option 就可以自动引入 polyfill 了。

- babel 7 的问题
  - @babel/plugin-transform-runtime 是不支持配置 targets 的，因为不知道目标环境支持啥，它只能全部做转换。你可能说不是有 preset-env 么？
  - babel 中插件的应用顺序是：先 plugin 再 preset，plugin 从左到右，preset 从右到左，这样 plugin-transform-runtime 是在 preset-env 前面的。
  - 等 @babel/plugin-transform-runtime 转完了之后，再交给 preset-env 这时候已经做了无用的转换了。

## 4. babel 8

- 更好的解决了按需引入polyfill
