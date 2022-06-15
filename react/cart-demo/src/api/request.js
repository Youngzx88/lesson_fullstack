import axios from 'axios'

export const doSearch = 
    async (filter) => await axios.get(`https://swapi.dev/api/people?search=${filter}`)
