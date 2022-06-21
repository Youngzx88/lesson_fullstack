import React, { useEffect } from 'react'
import { BannersWrapper } from './style'
import propTypes from 'prop-types'
import Swiper from 'swiper'
import { Link } from 'react-router-dom'

export default function Banners({ banners }) {
    let swiper = null;
    // 幻灯片
    useEffect(() => {
        // swiper不能一直实例化，加,[] 或者 添加boolean
        // 一直打印
        // console.log('22222222222222222')
        if(swiper){
            return
        }
        swiper = new Swiper('.btn-banners', {
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    },[])


    const renderBtnBannersPage1 = () => {
        let items = banners.slice(0, 10);
        return items.map(item => {
            return (
                <Link
                    to="/eleme/all"
                    className="swiper-item"
                    key={item.id}
                >
                    <div>
                        <p>
                            <img src={item.img} />
                        </p>
                        <span>
                            {item.title}
                        </span>
                    </div>
                </Link>
            )
        })
    }

    const renderBtnBannersPage2 = () => {
        let items = banners.slice(10);
        return items.map(item => {
            return (
                <Link
                    to="/eleme/all"
                    className="swiper-item"
                    key={item.id}
                >
                    <div>
                        <p>
                            <img src={item.img} />
                        </p>
                        <span>
                            {item.title}
                        </span>
                    </div>
                </Link>
            )
        })
    }


    return (
        <BannersWrapper>
            {/* 幻灯片 npm i swiper@4.5.0 */}
            <div className="btn-banners swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {renderBtnBannersPage1()}
                    </div>
                    <div className="swiper-slide">
                        {renderBtnBannersPage2()}
                    </div>
                </div>
                {/* 分页 */}
                <div className="swiper-pagination"></div>
            </div>
        </BannersWrapper>
    )
}
Banners.propTypes = {
    banners: propTypes.array.isRequired
}

