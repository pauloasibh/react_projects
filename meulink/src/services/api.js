import axios from "axios";

export const key = "d78553b3e7f46c6b47fa58e0a80504a75c1611ce";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    'Authorization': `Bearer ${key}`,
  }

});

export default api;
