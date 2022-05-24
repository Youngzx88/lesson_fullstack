- jsx怎么运行的？
1. 首先通过工程化的babel(JS转义工具)
    - @babel/preset-react.jsx
2. react可以运行的代码
    - React.createElement(dom标签，属性对象，...children)
    - React.createElement返回一个对象
    - document.getElementById('root').appendChild(jsx对象)
    