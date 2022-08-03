import axios from "axios";

const url = "https://cat-blog-api.herokuapp.com/api/v1/blogs"
const url2 = "https://cat-blog-api.herokuapp.com/api/v1/category"

const getAllPost = async () => {
    const {data} = await axios.get(`${url}`)
    return data
}
const getSinglePost = async (id) => {
    const {data} = await axios.get(`${url}/${id}`)
    return data
}

const getResentPost = async () => {
  const {data} = await axios.get(`${url}?sort=createdAt`) 
  return data
}

const getAllCategory = async () => {
    const {data} = await axios.get(url2)
    return data
}

const getFilterCategory = async (query) => {
    const {data} = await axios.get(`${url}?category=${query}`)
    return data
} 

const addNewPost = async (data,token) => {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`,
            'content-type': 'multipart/form-data'
        }
    }
    const {res} = await axios.post(`${url}`,data,config)
    return res
} 

const likePost = async (id,token) => {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const {data} = await axios.patch(`${url}/likePost/${id}`,{},config)
    return data
} 

const getFilterCreatedBy = async (query) => {
    const {data} = await axios.get(`${url}?createdBy=${query}`)
    return data
}

const deletePost = async (id,token) => {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const {data} = await axios.delete(`${url}/${id}`,config)
    return data
}

const singleEditPost = async (id) => {
    const {data} = await axios.get(`${url}/${id}`)
    return data
}

const updatePost = async (token,obj) =>{
    const {data,id} = obj
    const config = {
        headers : {
            Authorization : `Bearer ${token}`,
            'content-type': 'multipart/form-data'
        }
    }
    const response = await axios.patch(`${url}/${id}`,data,config)
    const post = response.data
    return post
}

const postService = {
    getAllPost,getSinglePost,
    getResentPost,getAllCategory,
    getFilterCategory,addNewPost,
    likePost,getFilterCreatedBy,
    deletePost,singleEditPost,
    updatePost
}

export default postService 