import axios from "axios"

const instance = axios.create({
    baseURL: "https://pr5back-s3zm.onrender.com"

})

export default instance