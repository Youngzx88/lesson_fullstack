import React from 'react'
import {Swiper} from 'antd-mobile'

import './style.css'
import { useState } from 'react'

export default function Carousel({imgs}) {

  const [imgIndex, setImgIndex] = useState(1)

  const items = imgs.map((item, index) => (
    <Swiper.Item key={index}>
      <img src={item} alt="" className='img-item' />
    </Swiper.Item>
  ))
  
  return (
    <div className='imgWrapper'>
        <Swiper onIndexChange={index => setImgIndex(index+1)} indicator={() => null}>
          {items}
        </Swiper>
        <span className='img-index'>{imgIndex} / {imgs.length}</span>
    </div>
  )
}

Carousel.propTypes = {
  img: propTypes.array.isRequired
}
