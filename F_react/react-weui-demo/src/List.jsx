import { useState } from 'react'
import WeUI from 'react-weui'  // react 组件框架

const {
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription
} = WeUI

function List(props) {
    const {data} = props
    return (
        data.map(book => <Book key={book.id} info={book}/>)
    )
}

function Book(props) {
    // props 非自有， 传入
    const {info} = props
  return (
    <MediaBox type="appmsg">
        <MediaBoxHeader>
            <img src="http://img53.ddimg.cn/2310311665003.jpg" alt="" />
        </MediaBoxHeader>
        <MediaBoxBody>
            <MediaBoxTitle>{info.title}</MediaBoxTitle>
            <MediaBoxDescription>{info.des}</MediaBoxDescription>
        </MediaBoxBody>
    </MediaBox>
    // <div>
    //     <div>
    //     {
    //         data.map((book) => <div key={book.id}>{book.title}</div>)
    //     }
    //     </div>
    // </div>
  )
}

export default List
