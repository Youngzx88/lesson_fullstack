import { axiosInstance } from "./config";

export const getBannerRequest = 
    () => axiosInstance.get('/banner')
// rank 模块  
export const getRankListRequest =
    () => axiosInstance.get('/toplist/detail')

export const getRecommendListRequest = 
    () => axiosInstance.get('/personalized')