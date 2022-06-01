import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.rebrandly.com/v1/links',
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: '4d1ae0f15d384ed98f69c4e582950261'
      }


})
export default api;