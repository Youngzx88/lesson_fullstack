import { useState, useEffect } from 'react'
import WeUI from 'react-weui'
const {
    Page,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxDescription,
    MediaBoxTitle,
    ButtonArea,
    Button,
    Dialog
} = WeUI
import PropTypes from 'prop-types';

//如果给address传的不是数组，不安全
const Address = ({address = []}) => {
    const [showDialog, setShowDialog] = useState(false)
    const delAddress = () => {
        setShowDialog(true)
    }

    return (
        <Page>
            <Panel>
                <PanelHeader>地址</PanelHeader>
                <PanelBody>
                    {address.map(item => 
                    <MediaBox key={item.id} type="text">
                        <MediaBoxDescription>
                            {item.address}
                        </MediaBoxDescription>
                        <MediaBoxTitle>{item.name}</MediaBoxTitle>
                    </MediaBox>)}
                </PanelBody>
            </Panel>
            <ButtonArea>
                <Button>新增地址</Button>
            </ButtonArea>
            <ButtonArea>
                <Button type="warn" onClick={delAddress}>删除地址</Button>
            </ButtonArea>
            {/* <Dialog show={showDialog} type="ios" title="确定删除地址吗？"> */}
        </Page>
    )
}

//prop-types约定父组件传进来的必须是数组
Address.propTypes = {
    address: PropTypes.array.isRequired
}

export default Address