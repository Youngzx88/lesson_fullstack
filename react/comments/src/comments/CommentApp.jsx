import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import {Wrapper} from "./comment.style";
function CommentApp(){
    return (
        <Wrapper>
            <CommentInput></CommentInput>
            <CommentList></CommentList>
        </Wrapper>
    )
}
export default CommentApp