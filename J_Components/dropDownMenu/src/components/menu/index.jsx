import React from 'react'

export default function Menu(props) {
  const {optionsLogo,optionsMenu} = props
  console.log(props);
  
  const showSecondMenu = (item) =>{
    console.log("item22",item)
  }
  return (
    <div className='w-full'>
      <div className='lg:container lg:mx-auto lg:p-4 lg:flex lg:flex-1 lg:flex-row lg:items-center'>
        <div className='flex flex-row justify-center items-center w-full'>
          {/* logo */}
          <div className='mr-auto'>
            <a href="#">
              <img className='w-16 ml-0' src={optionsLogo} alt="" />
            </a>
          </div>
          {/* first Menu */}
          {
            optionsMenu.length>0 && optionsMenu.map((item) =>{
              return ( 
                <div className='mr-24' key={item.title} onClick={()=>showSecondMenu(item)}><a href="">{item.title}</a></div>
              )
            })
          }
        </div>
      </div>
    </div>
    
  )
}
