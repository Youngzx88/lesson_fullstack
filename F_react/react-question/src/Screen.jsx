import {useState} from 'react'
function Screen({showContent}){//父组件给子组件传参数

    return (
        <div>
            {/* 不能直接调用showContent */}
            Screen{showContent}
        </div>
    )
}
export default Screen

//可以用解构优化
// function Screen(props){//父组件给子组件传参数

//     return (
//         <div>
//             {/* 不能直接调用showContent */}
//             Screen{props.showContent}
//         </div>
//     )
// }