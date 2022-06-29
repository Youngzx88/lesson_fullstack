import { axiosInstance } from "./config";

export const getBannerRequest = () => axiosInstance.get("/banner");

export const getRankListrRequest = () => axiosInstance.get("/toplist/detail");

