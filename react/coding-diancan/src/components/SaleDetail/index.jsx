import React from 'react'
import { Wrapper } from './style'

export default function SaleDetail({detail}) {
    const renderInfo = () => {
        return detail.map(item => (
            <div key={item.id}>
                <a href="">
                    <span>{item.name}</span>
                </a>
            </div>
        ))
    }
    const renderSaleSlide = () => {
        return detail.map((item, index) => {
            return (
                <div className="menu-box-detail" key={item.id}>
                    <div className="menu-top">
                        {/* id? */}
                        <div className="top-title" id={item.id}>
                            {item.name}
                        </div>
                        <span>{item.description}</span>
                    </div>
                    <div className="menu-box">
                    {
                        item.foods.map((element, index) => {
                            return (
                                <div key={index}className="menu-detail" >
                                    <div className="menu-detail-box">
                                        <div className="menu-item" key={index}>
                                            <div className="img-box">
                                                <img className="sale-img" src={item.img}  alt=""/>
                                            </div>
                                            <section>
                                                <p className="fooddetail-info">
                                                    <span>{element.name}</span>
                                                </p>
                                                <p className="fooddetail-sale">
                                                    <span>月售{element.month_sales}份</span>
                                                    <span>好评率100%</span>
                                                </p>
                                                <div className="fooddetails-space">
                                                </div>
                                                <span className="sale_price">
                                                    <span>￥{element.lowest_price}</span>
                                                </span>
                                                <div className="food-btn">
                                                    <span>
                                                    +
                                                    </span>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>   
                            )
                        })
                    }
                    </div>
                </div>
            )
        })
    }
  return (
    <Wrapper>
        <div className="sale-box">
            <div className="sale-main">
                <div className="sale-left">
                    <ul>
                        {renderInfo()}
                    </ul>
                </div>
                <div className="sale-detail-box">
                    <div className="sale-detail">
                        {renderSaleSlide()}
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
