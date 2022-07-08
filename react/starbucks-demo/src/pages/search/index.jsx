import React from 'react'
import { SearchWrapper } from './style'

export default function Search() {
  return (
    <SearchWrapper>
        <div className="head">
            close
        </div>
        <div className="body">
          <div className="search"></div>
          <div className="title">
            <div className="tag"></div>
          </div>
          <div className="hotlist">
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
          </div>
        </div>
    </SearchWrapper>
  )
}
