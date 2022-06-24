import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { getGoodsCard } from '@/api/request'
import GoodsCard from '@/components/goods-card'

function App() {
  const [cardData, setCardData] = useState([])
  useEffect(()=>{
    (async() => {
      let { data } = await getGoodsCard()
      setCardData(data)
    })()
  },[])
  return (
    <div className="App">
        <div style={{paddingTop: '10px'}}>
        {
          cardData.map(item => (
            <GoodsCard source={item} key={item.id} />
          ))
        }
      </div>
    </div>
  )
}

export default App
