import * as actionTypes from './constants'
import{
    getHotKeyWordsRequest,
    getSuggestListRequest,
    getResultSongsListRequest
} from '@/api/request'

const changeHotKeyWord = (data) =>({
    type: actionTypes.SET_HOT_KEYWRODS,
    data
})

const changeSuggestList = (data) =>({
    type: actionTypes.SET_SUGGEST_LIST,
    data
})

const changeResultSongs = (data) =>({
    type: actionTypes.SET_RESULT_SONGS_LIST,
    data
})

export const changeEnterLoading = (data) =>({
    type: actionTypes.SET_ENTER_LOADING,
    data
})

export const getHotKeyWords = () =>{
    return(dispatch) => {
        getHotKeyWordsRequest()
            .then(data=>{
                let list = data.result.hots
                dispatch(changeHotKeyWord(list))
            }
        )
    }
}