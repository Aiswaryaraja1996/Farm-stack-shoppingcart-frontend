import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8000/",
});

request.interceptors.request.use(
  (conf: any) => {
    const token = "";
    if (token) {
      conf.headers.Authorization = "Bearer " + token;
    }
    return conf;
  },
  (err: any) => Promise.reject(err)
);

export default request;
