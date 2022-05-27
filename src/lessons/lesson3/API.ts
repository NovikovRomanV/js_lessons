import axios from 'axios';


const configOMB = {
    baseURL: 'http://img.omdbapi.com/?apikey=[yourkey]&',
};
const key = '';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`s`).then(response => {return response.data})
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
