import axios from "axios";

const baseUrl = "https://app.ftoyd.com/fronttemp-service"

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export default axiosInstance