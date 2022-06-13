import React from 'react'
import WeUI from 'react-weui'
import { useNavigate } from 'react-router-dom'
import IconHome from '../assets/images/home.png'
import IconUser from '../assets/images/user.png'

const {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter,
    CellHeader,
    Badge
} = WeUI

// 小家页 
const User = () => {
    const navigate = useNavigate()
    const gotoPage = (page) => {
        navigate(page)
    }

    // bind不会立即执行，当函数运行时才根据指定的this执行
    return (
        <Tab>
            <TabBody>
                <div>
                    <Cells style={{marginTop: 0}}>
                        <Cell onClick={gotoPage.bind(null, '/login')}>
                            <CellHeader style={{position: 'relative', 
                            marginRight: '10px'}}>
                                <img src={IconUser} 
                                    style={{width: '50px', 
                                    display:'block'}}/>
                            </CellHeader>
                            <CellBody>
                                <p>杨仲鑫</p>
                                <p style={{fontSize:'13px', color: '#888888'}}>欢迎来到图书馆</p>
                            </CellBody>
                        </Cell>
                    </Cells>
                </div>
            </TabBody>
            <TabBar>
                <TabBarItem 
                    active={false} 
                    icon={<img src={IconHome}/>}
                    label="书单"
                    onClick={gotoPage.bind(null, '/')}
                />
            </TabBar>
        </Tab>
    )
}

export default User