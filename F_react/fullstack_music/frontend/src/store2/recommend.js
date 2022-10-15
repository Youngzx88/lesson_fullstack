// 初始状态
let defaultState = {
    banners: [
    ]
}
// 化数组为一  生成唯一的当前状态  状态的改变 
const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_BANNER':
            return {
                ...state,
                banners: action.data
            }
    }
    return state
}

export default reducer