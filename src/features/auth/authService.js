import axios from 'axios'

const url = "https://cat-blog-api.onrender.com/api/v1/auth/"
const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
const register = async (userData) => {
    const {data} =await axios.post(`${url}register`,userData,config)
    if(data){
        localStorage.setItem("user",JSON.stringify(data))
    }
    return data
}

const login = async (userdata) => {
    const {data} = await axios.post(`${url}login`,userdata)
    if(data){
        localStorage.setItem("user",JSON.stringify(data))
    }
    return data
}

const logout = async () =>{
    localStorage.removeItem("user")
   }

const authService = {
    register,login,logout
}

export default authService
