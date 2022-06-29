import { axiosInstance } from "./config";

export const getBannerRequest =  ()=>axiosInstance.get("/banner")