import { axiosInstance } from "./config";

export const getBannerRequest = () => axiosInstance.get("/banner");

export const getRankListRequest = () => axiosInstance.get("/toplist/detail");

export const getSingerRequest = () => axiosInstance.get("/top/artists");


