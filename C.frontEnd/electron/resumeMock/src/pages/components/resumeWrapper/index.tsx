import React from 'react'

export default function ResumeWrapper(props:any) {
  const { IsChoose } = props
  return (
    <div className='bg-[#fff] h-[88%] overflow-scroll w-full mt-2'>
      <IsChoose></IsChoose>
    </div>
  )
}
