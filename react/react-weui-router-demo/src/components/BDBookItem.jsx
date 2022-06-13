import React from "react";
import WeUI from 'react-weui'
import Book1 from '../assets/images/book.png'
import { useNavigate } from "react-router";

const {
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription
} = WeUI

const BDBookItem = () =>{
    const navigate = useNavigate()
    const gotoDetail = ()=>{
        navigate('/detail')
    }
    return (
        <MediaBox type = 'appmsg' onClick = {gotoDetail}>
            <MediaBoxHeader><img src={Book1}/></MediaBoxHeader>
            <MediaBoxDescription>
                一本颠覆人们对信息时代的认识，对创新和创业的理解
            </MediaBoxDescription>
        </MediaBox>
    )
}

export default BDBookItem