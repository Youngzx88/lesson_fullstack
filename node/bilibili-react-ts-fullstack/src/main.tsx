import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@/assets/font.css'
import {Provider} from 'react-redux'
import store from './store/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <>
      <App />
    </>
  </Provider>
)
