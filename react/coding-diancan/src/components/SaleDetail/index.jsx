import React from 'react'
import {Wrapper} from './style.css'
export default function SaleDetail() {
  return (
    <Wrapper>
        <div className="sale-box">
            <div className="sale-main">
                <div className="sale-left">
                    <ul>
                        {renderInfo()}
                    </ul>
                </div>
                <div className="sale-detail-box"></div>
            </div>
        </div>
    </Wrapper>
  )
}
