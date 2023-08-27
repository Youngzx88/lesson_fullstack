# AST

## 1. AST例子

```json
Program{
  type: "Program"
  start: 0
  end: 161
  body:[
    VariableDeclaration {type, start, end, declarations, kind}
    ExpressionStatement {type, start, end, expression}
    VariableDeclaration {type, start, end, declarations, kind}
  ]
  sourceType: "module"
}
```

## 2. 尝试编写Babel插件

- 所谓的babel插件其实是一个对象，对象里面有一个visitor属性，它也是一个对象，key为类型，value为函数，接受path作为参数。
