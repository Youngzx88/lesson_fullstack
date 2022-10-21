import Menu from "./components/menu"

function App() {
  const optionsLogo = 'https://www.magelesi.cn/assests/header/logo.png'
  const optionsMenu = [
    { title: "公司首页" , href:'https://tailwindcss.com/docs/align-self' ,
        second:[
          {title: '公司首页1',href:'https://tailwindcss.com/docs/align-self'},
          {title: '公司首页2',href:'https://tailwindcss.com/docs/align-self'},
          {title: '公司首页3',href:'https://tailwindcss.com/docs/align-self'},
        ]
    },
    { title: "公司首页" , href:'https://tailwindcss.com/docs/align-self' ,
        second:[
          
        ]
    },
    { title: "品牌故事" , href:'https://tailwindcss.com/docs/align-self' ,
        second:[
          
        ]
    },
    { title: "应用领域" , href:'https://tailwindcss.com/docs/align-self' ,
        second:[
          
        ]
    },
    { title: "核心技术" , href:'https://tailwindcss.com/docs/align-self' ,
        second:[
          
        ]
    },
    { title: "联系我们" , href:'https://tailwindcss.com/docs/align-self' ,
        second:[
          
        ]
    },
  ];
  return (
    <div className='w-full bg-[#b83]'>
      <Menu optionsLogo={optionsLogo} optionsMenu={optionsMenu}></Menu>
    </div>
  )
}

export default App
