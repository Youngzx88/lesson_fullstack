import { useState } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Index from '@/pages/Index/';
import Login from '@/pages/Login/';

function App(props) {
  const { login } = props;
  return (
    <>
    {login?<Index />:<Login/>}
    </>
  )
}
const mapStateToProps = (state) => ({
  login: state.login
})
export default connect(mapStateToProps)(App)
