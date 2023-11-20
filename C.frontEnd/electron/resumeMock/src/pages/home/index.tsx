import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

declare global {
  interface Window {
    electron: {
      fileAction: any
      getAppPath: any
    }
  }
}

export default function index() {
  const navigate = useNavigate()

  // window.electron.fileAction.read('/Users/youngzx/codeRelate/myCode/learn/lesson_fullstack/C.frontEnd/electron/resumeMock/src/pages/home/index.tsx', 'utf-8').then((data) => {
  //   console.log(data)
  // })

  window.electron.getAppPath().then((data) => {
    console.log('data', data)
    // window.electron.fileAction.read(`${data}`, 'utf-8').then((data) => {
    //     console.log(data)
    // })
  })

  const navigateByName = (text: '介绍' | '简介' | '源码') => {
    if (text === '介绍') {
      return navigate('/resume')
    } else {
      // shell.openExternal('https://github.com/PDKSophia/visResumeMook')
    }
  }

  const navigateToResume = () => {
    return navigate('/resume')
  }

  return (
    <div className="w-full h-full bg-[#26292C] text-[#EEEFF1]">
      <div className="h-full pt-20 pb-4 flex justify-between items-center flex-col">
        <div className="flex justify-center items-center flex-col">
          <div className="text-xl font-medium">Great Resume</div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-sm mt-8">
              一个模板简历制作平台, 让你的简历更加出众 ~
            </div>
            <div className="w-[58%] mt-4 text-xs flex justify-between items-center">
              {['介绍', '简历', '源码'].map((text, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => navigateByName(text)}
                    className="item border-[0.5px] px-2 py-1 rounded-md">
                    {text}
                  </div>
                )
              })}
            </div>
            <div
              className="item box-border w-24 h-8 font-medium leading-8 text-sm text-center bg-[#eef0f1] text-[black] rounded-md mt-12 shadow-xl"
              onClick={navigateToResume}>
              开始制作
            </div>
          </div>
        </div>
        <div className="w-[80%] flex justify-center items-center flex-col">
          <p className="text-xs">
            If you have any questions, please contact email 1216238955@qq.com
          </p>
          <p className="text-xs">
            Copyright © 2023-{new Date().getFullYear()} All Rights Reserved.
            Copyright By Youngzx
          </p>
        </div>
      </div>
    </div>
  )
}
