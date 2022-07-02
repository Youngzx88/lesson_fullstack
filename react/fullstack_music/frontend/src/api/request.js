import { axiosInstance } from "./config";

export const getBannerRequest = () => axiosInstance.get("/banner");


export const getRankListRequest = () => axiosInstance.get("/toplist/detail");

export const getSingerListRequest = () => axiosInstance.get("/top/artists");

export const getRecommendListRequest = () => axiosInstance.get("/personalized");


