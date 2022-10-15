let defaultState = {
    rankList: []
}
const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_RANKLIST':
            return {
                ...state,
                rankList:action.data
            }
            // console.log('--------------------------')    
        break;
    }
    return state
}
export default reducer