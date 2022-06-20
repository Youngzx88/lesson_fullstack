import axios from 'axios'

export const getCities = () => {
   return  axios.get('https://www.fastmock.site/mock/338b9df2b6a6b1add8fd14738e124a82/cities/cities')
}

export const getBanners = () => {
   return axios.get('https://www.fastmock.site/mock/338b9df2b6a6b1add8fd14738e124a82/cities/banners')
}

export const getRestaurants = () =>
    axios.get("https://www.fastmock.site/mock/fc09142a9029fcb292822d4ee872f52b/beers/restaurants")