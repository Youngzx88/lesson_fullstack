import React, { useState } from 'react'
import { connect } from 'react-redux';
import {
  checkAllGoodsAction,
  checkGoodsAction,
  changeGoodsNumAction
} from './store/actionCreators'
import './assets/css/shoppingCart.css'
function App() {
  return (
    <div className="App">
      
    </div>
  )
}

export default connect()(React.memo(App))
