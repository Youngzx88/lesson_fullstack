import { useState } from 'react'
import { UserOutlined, VerifiedOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import './App.css'
function App() {

  const [userName,setUserName] = useState('')
  const [pwd,setPwd] = useState('')
  const [registerUserName,setRegisterUserName] = useState('')
  const [registerPwd,setRegisterPwd] = useState('')

  const login = () => {
    console.log("登录",userName,pwd)
  }

  const register = () => {
    console.log("注册",registerUserName,registerPwd)
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
    </div>
  )
}

export default App
