import React from "react";


const Editor = (props) =>{
    
    // 组件除了传数据还可以传函数
    // const updateEnity = (event) => {
    //     console.log(event);
    // }
    const {updateEnity} = props;

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <textarea 
                        rows="5" 
                        placeholder="写点东西"
                        onInput={(event) => {updateEnity(event)}}
                    />
                </div>
            </div>
        </div>
    )
}
export default Editor;