import axios from "axios";
import { getTokenFromLocalStorage, removeToken } from "../helpers/manageLocalStorage";


const baseURL = process.env.REACT_APP_API_BASE_URL;

export const API = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    //"Access-Control-Allow-Origin": "*",
  },
});

API.interceptors.request.use(
  (req) => {
    const token = getTokenFromLocalStorage("user");
    if(token){
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err)=>{    
    if (err.response.status === 401) {      
      removeToken("user");
      //window.location.href = "/"
    } else {
      console.error(err);
    }
    return Promise.reject(err);
  }  
);

export const setAuthHeader = (token) => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const builder = {
  API,
  setAuthHeader,
};
export default builder;
