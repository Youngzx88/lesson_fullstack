import React from 'react'
import { Wrapper } from './style'

export default function index() {
    const backtop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <Wrapper>
            <div className="recommend_store">
                <p>推荐商家</p>
            </div>
            <div className="store_sort">
                <div>
                    <p>综合排序</p>
                    <i className="fa fa-caret-down"></i>
                </div>
                <div>
                    <p>距离远近</p>
                </div>
                <div>
                    <p>品质联盟</p>
                </div>
                <div>
                    <p>筛选</p>
                    <i className="fa fa-glass"></i>
                </div>
            </div>
            <div className="back_top" onClick={backtop}>
                <i className="fa fa-angle-double-up"></i>
            </div>
        </Wrapper>
    )
}
