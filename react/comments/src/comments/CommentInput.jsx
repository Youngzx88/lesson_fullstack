import React,{useState} from "react";
function CommentInput(){
    //状态
    const [username,setUsername] = useState('');
    const [content,setContent] = useState('');
    const handleSubmit = () =>{
        const comment = {
            username,
            content
        }
        console.log(comment,"--------")
    }
    const handleUsernameChange = (event) =>{
        setUsername(event.target.value);
    }
    const handleContentChange = (event) =>{
        setContent(event.target.value);
    }
    return (
        <div>
            <div className="comment-field">
                <span className="comment-field-name">用户名:</span>
                <div className="comment-field-input">
                    {/* 数据驱动的界面，表单和其他的不一样，表单要交互，表单输入同步到状态之中 */}
                    {/* 状态绑定了表单，表单输入可以同步到状态就好了；react不支持双向绑定，单向数据绑定 */}
                    {/* 1.通过value设置username绑定input 2.通过in */}
                    <input type="text" value={username} onChange={handleUsernameChange}/>
                </div>
            </div>
            <div className="comment-field">
            <span className="comment-field-name">评论内容:</span>
            <div className="comment-field-input">
                <textarea type="text" value={content} onChange={handleContentChange}/>
            </div>
        </div>
        <div className="comment-field-button">
            <button onClick={handleSubmit}>
                发布
            </button>
        </div>
    </div>
    )
}
export default CommentInput