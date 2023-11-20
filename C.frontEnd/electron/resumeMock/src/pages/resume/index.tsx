import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RESUME_TOOLBAR_LIST } from '../../constants/basicResumeToolBarConstant'
import BasicTemplate from '../../templates/basicTemplate'
import ResumeWrapper from '../components/resumeWrapper'

export default function Resume() {
  const navigate = useNavigate()

  const goBack = () => {
    return navigate('/')
  }

  const onExport = () => {}

  const ResumeHeader = () => {
    return (
      <div className="h-[12%] box-border rounded-md bg-[#fff] p-4 flex justify-center items-center flex-col">
        <div className="flex w-full justify-between items-center">
          <div className="text-xs text-[#7B7B7B]" onClick={goBack}>
            返回
          </div>
          <div
            className="text-xs text-[#fff] w-24 shadow-lg bg-[#26292C] text-center h-8 rounded-2xl leading-8"
            onClick={onExport}>
            导出PDF
          </div>
        </div>
      </div>
    )
  }

  const ResumeContent = () => {
    // 我希望把简历的背景做成传入的参数，我只需要传入模版即可（注意模版与toolbar一一对应）
    return (
      <ResumeWrapper IsChoose={BasicTemplate}></ResumeWrapper>
    )
  }

  // 封装一层：把动画，RESUME_TOOLBAR_LIST通过参数传入，动画可选非必填
  const ResumeToolBar = () => {
    return (
      <div className="w-full h-[80%] bg-[#FFFFFF] rounded-2xl px-4 py-2 overflow-auto">
        <div className="text-sm w-full font-medium flex justify-start items-center">
          <div className='w-1 h-4 bg-[#16ADA9]'></div>
          <div className='ml-2'>全部模块</div>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          {RESUME_TOOLBAR_LIST.map((toolbar) => {
            return (
              // 点击松手动画
              <div
                className="text-sm flex bg-[#EAECED] justify-start items-center mt-4 p-2 w-[90%] rounded-md shadow-lg hover:opacity-80 "
                key={toolbar.key}
                onMouseUp={()=>console.log(1)}
                onMouseDown={()=>console.log(2)}
                >
                <img className="w-5 font-medium ml-4" src={toolbar.icon} alt="" />
                <div className="flex flex-col justify-center items-start ml-4">
                  <div className="text-sm">{toolbar.name}</div>
                  <div className="text-xs text-[#ACAEB0]">
                    {toolbar.summary}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex justify-around items-center bg-[#26292C]">
      <div className="w-[70%] h-full py-4 pl-2">
        <ResumeHeader></ResumeHeader>
        <ResumeContent></ResumeContent>
      </div>
      <div className="w-[30%] h-full flex justify-center items-center flex-col px-2">
        <ResumeToolBar></ResumeToolBar>
      </div>
    </div>
  )
}
