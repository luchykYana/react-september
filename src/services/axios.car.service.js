const axios = require('axios');
const {urls} = require('../configs/urls');

const axiosCarService = axios.create({
    baseURL: urls.baseURL
})

export default axiosCarService;
