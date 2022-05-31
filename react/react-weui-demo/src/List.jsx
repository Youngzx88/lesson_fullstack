import { useState } from 'react'

function List({data}) {
  return (
    <div>
      {
        data.map((item,id)=><div key={id}>{item.title}-{item.des}</div>)
      }
    </div>
  )
} 

export default List
