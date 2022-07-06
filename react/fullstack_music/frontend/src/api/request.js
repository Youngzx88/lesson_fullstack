import { axiosInstance } from "./config";

export const getBannerRequest = 
    () => axiosInstance.get('/banner')
// rank 模块  
export const getRankListRequest =
    () => axiosInstance.get('/toplist/detail')

export const getRecommendListRequest = 
    () => axiosInstance.get('/personalized')

    // 热搜
export const getHotKeyWordsRequest = 
    () => axiosInstance.get('/search/hot')

export const getSuggestListRequest = 
    () => axiosInstance.get(`/search/suggest?keywords=${query}`)

export const getResultSongsListRequest = 
    () => axiosInstance.get(`/search?keywords=${query}`)

// export const getSongDetailRequest = 
//     () => axiosInstance.get(`/song/detail?ids=${id}`)

