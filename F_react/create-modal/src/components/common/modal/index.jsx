import React,{ useEffect, useState } from "react";
import './modal.css'
/*
* @param {visible boolean} props 控制显示
*
*/
const Modal = (props) => {
    //1.第一种方式控制是否显示
    // const {visible,title,children} = props
    //2.第二种方式控制是否显示(外面可以传一个true/false，并且自己也可以控制组件的关闭)
    const {visible:show,title,children} = props
    const {onClose,onConfirm} = props
    const [visible,setvisible] = useState(false)
    useEffect(()=>{
        setvisible(show)
    },[show])
    const closeModal = () =>{
        setvisible(false)
        onClose && onClose()
    }
    const confirm = () =>{
        setvisible(false)
        onConfirm && onConfirm()
    }
    const maskClick = () =>{
        setvisible(false)
        onClose && onClose()
    }   

    return (
        visible && 
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-title">{title}</div>
            <div className="modal-content">{children}</div>
            <div className="modal-operator">
              <button className="modal-operator-close" onClick={closeModal}>取消</button>
              <button className="modal-operator-confirm" onClick={confirm}>确定</button>
            </div>
          </div>
          <div className="mask" onClick={maskClick}></div>
        </div>
    )
}

export default Modal