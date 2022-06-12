import React from 'react'
import WeUI from 'react-weui'
import IconHome from '../assets/images/home.png'
import IconUser from '../assets/images/user.png'
import { useNavigate } from 'react-router-dom'
const {
    Tab: WTab,
    TabBody,
    TabBar,
    TabBarItem
} = WeUI

const Tab = () => {
    const navigate = useNavigate();
    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6];
    const gotoUser = () => {
        navigate('/user')
    }
    return (
        <WTab >
            <TabBody>
            </TabBody>
            <TabBar>
                <TabBarItem active={true}  icon={<img src={IconHome}/>} label="书单"/>
                <TabBarItem 
                    onClick={gotoUser}
                active={false} icon={<img src={IconUser}/>} label="我"/>
            </TabBar>
        </WTab>
    )
}

export default Tab