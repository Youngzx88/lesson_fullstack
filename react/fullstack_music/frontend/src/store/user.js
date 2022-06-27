let defaultState = {
    users: [
        {id: 1, name: '杨仲鑫', bio: '写代码就为爱好不为钱'},
        {id: 2, name: '黄昊', bio: '代码无价!!!'}
    ],
    banners: [
        {id: 1, img: 'xx.jpg'},
        {id: 1, img: 'xx.jpg'}
    ],
    list: [
        {id: 1, img: 'xx.jpg', title: 'aaa'},
        {id: 2, img: 'xx.jpg', title: 'bbb'}
    ]
}
const reducer = (state=defaultState) => {
    return state
}

export default reducer