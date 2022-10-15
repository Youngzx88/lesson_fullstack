import React from 'react'
import WeUI from 'react-weui'
import IconHome from '../assets/images/home.png'
import IconUser from '../assets/images/user.png'
import { useNavigate } from 'react-router-dom'
import BDBookItem  from '../components/BDBookItem'

const {
    Tab: WTab,
    TabBody,
    TabBar,
    TabBarItem,
    Panel,
    PanelBody,
    SearchBar
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
                <Panel>
                    <PanelBody>
                        <SearchBar placeholder="请输入你要查找的图书" lang={{cancel:'取消'}}></SearchBar>
                        {
                            items.map((item,i) => {
                                return (
                                    <BDBookItem key={i}/>
                                )
                            })
                        }
                    </PanelBody>
                s</Panel>
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