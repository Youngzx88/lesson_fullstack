import React,{useEffect} from "react";
import { useParams, useLocation,useNavigate } from 'react-router-dom'
// path 动态参数部分
const Detail = () => {
    let id = null;
    const navigate = useNavigate();
    const paramsObj = useParams();
    //1. 用:id的方式
    if (paramsObj?.id) {
        id = paramsObj.id
    //2. 用传统 ？的传参方式
    } else {
        let searchObj = new URLSearchParams(useLocation().search)
        if (searchObj.get('id')) {
            id = searchObj.get('id')
        }
    }
    useEffect(()=>{
        if(!id){
            navigate('/')
        }
    },[])
    
    // console.log(id)
    return(
        <>Detail{id} </>
    )
}

export default Detail;