- any
- keyof Color 值的范围 enum
- typescript有什么魅力
  1. 增强了语言能力 interface 泛型 type keyof ：强类型
  2. 编译能力：边写边编译
  3. 代码建议
  4. 开发更快
  5. 有很多现成的类型定义文件 @types/react
  
- typescript怎么取巧呢？
  1. any
  2. 快速修复

- api typeScript比较复杂
  1. api使命是返回数据的，符合模型的定义
  2. 每个模块都会对应一个table，model层有一个对应的模型定义文件，interface
  3. 异步，返回的是promise：Promise< MemberEntity > 每处promise都得写清楚
  
- 封装了一个hook函数
  1. 每一个hooks都有使命
  2. useEffect，useState react 内置的
  3. useNavigate react-router-dom 内置的
  4. useMemberCollection的hooks 状态声明(useState) 和接口请求 封装到内部去了