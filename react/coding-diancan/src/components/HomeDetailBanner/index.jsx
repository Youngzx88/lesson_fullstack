import React, { useEffect } from 'react'
import './style.css'
import Swiper from 'swiper'
import propTypes from 'prop-types'

export default function HomeDetailBanner({banners=[]}) {
    let swiper;
    useEffect(() => {
        if (swiper) return;
        swiper = new Swiper('.detail-banners', {
            // loop:true,
            autoplay: {
                delay: 3000
            }
        })
    }, [])

    const renderSlide = () => {
        return (
            banners.map((item) => (
                <div className="swiper-slide food-item" key={item.id}>
                    <img src={item.img} alt="" className="food-img" />
                    <p className="food-card">{item.name}</p>
                    <p className="food-card-desc">{item.pics}</p>
                    <div className="food-sale">
                        <p className="food-price">{item.price}</p>
                        <span className="btn">+</span>
                    </div>
                </div>
            ))
        )
    }
    return (
        <div>
            <div className="title">
                <div className="detail-banners swiper-container">
                    <div className="swiper-wrapper food-box">
                    {renderSlide()}
                    </div>
                </div>
            </div>
        </div>
    )
}

HomeDetailBanner.propTypes = {
    banners: propTypes.array.isRequired
}