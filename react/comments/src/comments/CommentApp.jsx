import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import {InputWrapper} from './comment.style'
import {Wrapper} from "./comment.style";
//可以把样式抽出来import
// const Wrapper = styled.div`
//     width: 500px;
//     margin: 10px auto;
//     font-size: 14px;
//     background-color: #fff;
//     border: 1px solid #f1f1f1;
//     padding: 20px;
// `
function CommentApp(){
    return (
        <InputWrapper>
            commentApp
            <CommentInput></CommentInput>
            <CommentList></CommentList>
        </InputWrapper>
    )
}
export default CommentApp