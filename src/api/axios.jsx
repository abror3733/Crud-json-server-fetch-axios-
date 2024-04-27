import axios from "axios"

const instance = () => {
    return axios.create({
        baseURL:"http://localhost:3000",
        headers:{
            "Content-Type": "application/json",
            "Accept": "*/*"
        }, 
        timeout:10000
    })
}

export default instance