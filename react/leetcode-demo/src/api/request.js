import axios from 'axios'

export const getQuesionList = ()=>{
    return axios.get('https://www.fastmock.site/mock/9f3132e41d9d9cb7086d244711ec25eb/question/quesions')
}
