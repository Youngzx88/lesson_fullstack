import React from 'react'
import {Swiper} from 'antd-mobile'
import './style.css'
import { useState } from 'react'
import propTypes from 'prop-types'

export default function Carousel({imgs}) {
    const [imgIndex, setImgIndex] = useState(1)
    const items = imgs.map((item, index) => (
        <Swiper.Item key={index}>
          <img src={item} alt="" className='img-item' />
        </Swiper.Item>
      ))
  return (
    <div className='img-wrapper'>
        <Swiper onIndexChange={index => setImgIndex(index+1)}
         indicator={() => null}>
          {items}
        </Swiper>
        <span className='img-index'>{imgIndex} / {imgs.length}</span>
    </div>
  )
}

Carousel.propTypes = {
    imgs: propTypes.array.isRequired
}