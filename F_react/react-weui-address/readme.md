- weui css 框架
- weui-react UI框架 Dialog
- axios + fastmock 远程接口
- 组件化思想
    1. html+css+js类section 一个功能组件的封装
    2. 界面开发，组件化开发
    3. 采用一个好用的react UI组件库 `npm react-weui`
- 状态
    1. 组件有自有数据状态和props
    2. 静态界面，界面的状态
    3. 界面在那一刻对应唯一的状态
- prop-types
    - 运行时参数的类型检测
    1. npm init prop-types
    2. import PropTypes from 'prop-types';
    3. 传值的时候，错误会在控制台报出明显的错误
    ```jsx
    //prop-types约定父组件传进来的必须是数组
    Address.propTypes = {
        address: PropTypes.array.isRequired
    }
    ```