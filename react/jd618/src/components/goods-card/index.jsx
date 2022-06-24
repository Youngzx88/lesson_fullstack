import React from 'react'
import classNames from "classnames";
import {Popup} from 'antd-mobile'
import Carousel from "@/components/common/carousel";
import './style.css'

export default function GoodCard({source}) {
  return (
    <div className="goodsWrapper">
        <Carousel imgs={imgs} />
    </div>
  )
}
