import { useState } from 'react'
import { UserOutlined, VerifiedOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import './App.css'
import axios from 'axios'
function App() {

  const [userName,setUserName] = useState('')
  const [pwd,setPwd] = useState('')
  const [registerUserName,setRegisterUserName] = useState('')
  const [registerPwd,setRegisterPwd] = useState('')

  const login = async () => {
    const loginRes = await axios.post('http://127.0.0.1:3000/user/login',{
      username:userName,
      password: pwd
    })
    if(loginRes.data === 'loginSuss'){
      localStorage.setItem('token',loginRes.headers['token'])
    }else{
      return
    }
  }

  const getByJwt = async () => {
    const infoBack = await axios.get('http://127.0.0.1:3000/user/jwtVertify',{
      headers: {
        'authorization': `bearer ${localStorage.getItem('token')}`
      }
    })
    console.log("infoBack",infoBack)

  }

  const register = async () => {
    const registerRes = await axios.post('http://127.0.0.1:3000/user/register',{
      username:registerUserName,
      password: registerPwd
    })
    console.log("🚀 ~ file: App.jsx:26 ~ register ~ registerRes:", registerRes)
  }
  
  return (
    <div className="App">
      <Input
        size="large"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="请输入用户名"
        prefix={<UserOutlined />}
      />
      <br />
      <br />
      <Input.Password
        size="large"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        placeholder="请输入密码"
        prefix={<VerifiedOutlined />}
      />
      <br />
      <br />
      <Button type="primary" onClick={login}>登录</Button>
      <br />
      <br />
      <Input
        size="large"
        value={registerUserName}
        onChange={(e) => setRegisterUserName(e.target.value)}
        placeholder="请输入用户名"
        prefix={<UserOutlined />}
      />
      <br />
      <br />
      <Input.Password
        size="large"
        value={registerPwd}
        onChange={(e) => setRegisterPwd(e.target.value)}
        placeholder="请输入密码"
        prefix={<VerifiedOutlined />}
      />
      <br />
      <br />
      <Button type="primary" onClick={register}>注册</Button>
      <br />
      <br />
      <Button type="primary" onClick={getByJwt}>测试请求携带JWT</Button>
    </div>
  )
}

export default App
