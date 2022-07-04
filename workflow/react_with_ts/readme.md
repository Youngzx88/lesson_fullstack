 - npm i @babel/cli @babel/core @babel/preset-env babel-loader @babel/preset-typescript @babel/preset-react --save-dev

 1. react ➕ ts才是终极
  - js因为类型问题，随意，容易出错
  - ts是js的超级，类型约束，加一点点，App:react.FC 
  - 文件后缀 由`.jsx -> .tsx` webpack，vite不怕，只要给相应的`loader babel-loader`
  - .babelrc 加了一个reset: `"@babel/preset-typescript"`
  - `App: React.FC<>` App是react函数组件