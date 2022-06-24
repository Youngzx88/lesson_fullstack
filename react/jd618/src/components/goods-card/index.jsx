import React, { useState, useEffect } from "react";
import classNames from "classnames";
import {Popup} from 'antd-mobile'
import './style.css'
import Carousel from "@/components/common/carousel";

export default function GoodsCard({source}) {
    const {imgs,title,com_count,comment,price,discount_price} = source
    const [showTab, setShowTab] = useState(false)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowTab(true)
    //     }, 2000)
    // }, [])
    return (
        <div className="goods-wrapper">
            <Carousel imgs={imgs} />
            <div className="content">
                <div className="comment-wrapper">
                    <div className="comment-box">
                        <div className="count">{com_count}</div>
                        <div className="comment">评价</div>
                    </div>
                    <div className="comment">
                        {comment}
                    </div>
                </div>
                <div className="goods-title-wrapper">
                    <div className="goods-title">{title}</div> 
                    <div className="goods-arrow">&gt;</div>
                </div>
            </div>
            <Popup
            visible={showTab}
            onMaskClick={() => {setShowTab(false)}}
            bodyStyle={{ height: "90vh" }}
            >
                <div>popup</div>
            </Popup>
        </div>
    )
}
