import { Suspense, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
// 把路由拆出来
import RoutesConfig from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>loading</div>}>
      <RoutesConfig />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
