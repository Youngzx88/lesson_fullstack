import { Typography } from "antd";
import React from "react";

const CartItem = (props) => {
    const {item} = props
    const {checked,name,price} = item
    return (
        <div className="item-card">
            <div className="checkbox-wrap">
                <input 
                type="checkbox"
                checked={checked}
                />
            </div>
            <p className="item-info">
                {name}<Typography.Text mark>${price}</Typography.Text>
            </p>
        </div>
    )
}

export default CartItem