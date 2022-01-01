import axios from 'axios'


const axiosClient = axios.create({
    baseURL: 'http://svcy.myclass.vn/api/SinhVienApi',
    headers: {
        "Content-type": "application/json; charset=utf-8"
    }
})

axiosClient.interceptors.request.use(async (config) => {
    //hanlde token
    return config
})

axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data
    }
    return response
}, (error) => {
    throw error
})

export default axiosClient