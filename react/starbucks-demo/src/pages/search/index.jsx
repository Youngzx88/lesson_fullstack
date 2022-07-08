import React,{useState,useEffect,useRef} from 'react'
import { SearchWrapper} from './style'
import { useNavigate } from 'react-router-dom'


export default function Search() {
  let navigate = useNavigate();
  //变量
  const [query,setQuery] = useState(' ')
  //函数
  const handleChange = (e) =>{
    let val = e.currentTarget.value
    setQuery(val)
  }

  //主体jsx
  return (
    <SearchWrapper>
        <div className="searchHead">
          <button className='iconfont icon-cuowu' onClick={()=>navigate(-1)}></button>
        </div>
        <div className="search_box">
          <input type="text" className='box' placeholder='搜索菜单' onChange={handleChange} >
          </input>
          <i className='iconfont icon-sousuo'></i>
        </div>
    </SearchWrapper>
  )
}
