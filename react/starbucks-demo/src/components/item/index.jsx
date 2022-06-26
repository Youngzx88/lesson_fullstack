import React from 'react'
import { Wrapper,Card } from './style'

export default function Item( {list} ) {
  const {id,status,title,goods} = list
  return (
    <Wrapper>
        {list.map(
            item => (
              <Card key={item.id} >
                <div className="preview circle">
                    
                </div>
              </Card>
            )
        )
        }
        {/* <div className="id">
          <div className="title"></div>
          <div className="goods"></div>
        </div> */}
    </Wrapper>
  )
}
