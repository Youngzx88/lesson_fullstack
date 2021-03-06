import React, {useState, useEffect} from 'react'
import { List, Typography } from 'antd'
import CartItem from './CartItem'

const Cart = () => {
    const [cartData, setCartData] = useState(Array(5)
        .fill(undefined)
        .map((v, i) => ({
            id: i,
            name: `商品${i}`,
            checked: false,
            price: Math.round(Math.random() * 100)
        }))
    )
    const [total, setTotal] = useState(0)
    const [checkedAll, setCheckedAll] = useState(false)
    const onCheckedChange = (item) => {
        //不用map用findIndex
        let idx = cartData.findIndex(data=>item.id === data.id)
        // console.log(idx)
        cartData[idx].checked = !cartData[idx].checked
        setCartData([
            ...cartData
        ])
    }
    // map遍历每一个元素并把每个item设置为与checkAll相反的状态，更新购物车
    const onWrappCheckedChange = () =>{
        let newData = cartData.map((item) =>{
            item.checked = !checkedAll
            return item
        })
        setCartData([
            ...newData
        ])
    }
    // 用useEffect维护carData的更新，setTotal，setCheckAll
    useEffect(() => {
        // mounted
        // update 
        let totalPrice = cartData
                            .filter((item) => item.checked)
                            // prev是上一次执行的结果，item是当前元素
                            .reduce((prev,item) => {
                                return prev+item.price
                            },0)
        setTotal(totalPrice)
        setCheckedAll(cartData.every((item)=>item.checked==true))                   
    }, [cartData])
    const Footer = (
        <div className="footer">
            <div className="check-all">
                <input 
                    checked={checkedAll}
                    type="checkbox" 
                    onChange={onWrappCheckedChange}
                />
                全选
            </div>
            <div>
                价格总计<Typography.Text mark>${total}</Typography.Text>
            </div>
        </div>
    )
    return (
        <div className="cart">
            <List 
                header={<div>购物车</div>}
                footer={Footer} 
                bordered
                dataSource={cartData}
                renderItem={item => {
                    return (
                        <List.Item>
                            <CartItem 
                                item={item} 
                                onCheckedChange={onCheckedChange}/>
                        </List.Item>
                    )
                }}
            />
        </div>
    )
}

export default Cart