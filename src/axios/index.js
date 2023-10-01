import axios from "axios"

const instance = axios.create({
    baseURL: "https://restapi5.onrender.com"

})

export default instance