import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postService from "./postService"

const initialState = {
    posts: [],
    post: {},
    resentPost: [],
    category: [],
    userPosts: [],
    editPost: {},
    isError: false,
    isSucces: false,
    isLoadind: false,
    message: ""
}

export const getAllPost = createAsyncThunk("post/getAllPost", async (data, thunkAPI) => {
    try {
        return await postService.getAllPost()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getSinglePost = createAsyncThunk("post/getSinglePost", async (data, thunkAPI) => {
    try {
        return await postService.getSinglePost(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getResentPost = createAsyncThunk("post/getResentPost", async (data, thunkAPI) => {
    try {
        return await postService.getResentPost()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getAllCategory = createAsyncThunk("post/getAllCategory", async (data, thunkAPI) => {
    try {
        return await postService.getAllCategory()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getFilterCategory = createAsyncThunk("post/getFilterCategory", async (data, thunkAPI) => {
    try {
        return await postService.getFilterCategory(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const addNewPost = createAsyncThunk("post/addNewPost", async (data, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token

        return await postService.addNewPost(data, token)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const likePost = createAsyncThunk("post/likePost", async (data, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.likePost(data, token)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getFilterCreatedBy = createAsyncThunk("post/getFilterCreatedBy", async (data, thunkAPI) => {
    try {
        return await postService.getFilterCreatedBy(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const deletePost = createAsyncThunk("post/deletePost", async (data, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.deletePost(data, token)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const singleEditPost = createAsyncThunk("post/singleEditPost", async (data, thunkAPI) => {
    try {
        return await postService.singleEditPost(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const updatePost = createAsyncThunk("jobs/updatePost", async (obj, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.updatePost(token, obj)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        reset: (state, action) => {
            state.isError = false
            state.isSucces = false
            state.isLoadind = false
            state.message = ""
        },
    },
    extraReducers: {
        [getAllPost.pending]: (state) => {
            state.isLoadind = true
        },
        [getAllPost.fulfilled]: (state, action) => {
            state.isLoadind = false
            state.isSucces = true
            state.posts = action.payload
        },
        [getAllPost.rejected]: (state, action) => {
            state.isLoadind = false
            state.isError = true
            state.message = action.payload
            state.posts = null
        },
        [getSinglePost.pending]: (state) => {
            state.isLoadind = true
        },
        [getSinglePost.fulfilled]: (state, action) => {
            state.isLoadind = false
            state.isSucces = true
            state.post = action.payload
        },
        [getSinglePost.rejected]: (state, action) => {
            state.isLoadind = false
            state.isError = true
            state.message = action.payload
            state.post = null
        },
        [getResentPost.pending]: (state) => {
            state.isLoadind = true
        },
        [getResentPost.fulfilled]: (state, action) => {
            state.isLoadind = false
            state.isSucces = true
            state.resentPost = action.payload
        },
        [getResentPost.rejected]: (state, action) => {
            state.isLoadind = false
            state.isError = true
            state.message = action.payload
            state.resentPost = null
        },
        [getAllCategory.pending]: (state) => {
            state.isLoadind = true
        },
        [getAllCategory.fulfilled]: (state, action) => {
            state.isLoadind = false
            state.isSucces = true
            state.category = action.payload
        },
        [getAllCategory.rejected]: (state, action) => {
            state.isLoadind = false
            state.isError = true
            state.message = action.payload
            state.category = null
        },
        [getFilterCategory.pending]: (state) => {
            state.isLoadind = true
        },
        [getFilterCategory.fulfilled]: (state, action) => {
            state.isLoadind = false
            state.isSucces = true
            state.posts = action.payload
        },
        [getFilterCategory.rejected]: (state, action) => {
            state.isLoadind = false
            state.isError = true
            state.message = action.payload
            state.posts = null
        },
        [addNewPost.pending]: (state) => {
            state.isLoadind = true
        },
        [addNewPost.fulfilled]: (state, action) => {
            state.isLoadind = false
            state.isSucces = true
        },
        [addNewPost.rejected]: (state, action) => {
            state.isLoadind = false
            state.isError = true
            state.message = action.payload
        },
        [likePost.pending]: (state) => {
            state.isLoadind = true
        },
        [likePost.fulfilled]: (state, action) => {
            state.isLoadind = false
            state.isSucces = true
            state.message = action.payload
        },
        [likePost.rejected]: (state, action) => {
            state.isLoadind = false
            state.isError = true
            state.message = action.payload
        },
        [getFilterCreatedBy.pending]: (state) => {
            state.isLoadind = true
        },
        [getFilterCreatedBy.fulfilled]: (state, action) => {
            state.isLoadind = false
            state.isSucces = true
            state.userPosts = action.payload
        },
        [getFilterCreatedBy.rejected]: (state, action) => {
            state.isLoadind = false
            state.isError = true
            state.message = action.payload
            state.userPosts = null
        },
        [deletePost.pending]: (state) => {
            state.isLoadind = true
        },
        [deletePost.fulfilled]: (state, action) => {
            state.isLoadind = false
            state.isSucces = true
            state.message = action.payload
            state.userPosts = state.userPosts.filter((post) => post._id !== action.payload)
        },
        [deletePost.rejected]: (state, action) => {
            state.isLoadind = false
            state.isError = true
            state.message = action.payload
        },
        [singleEditPost.pending]: (state) => {
            state.isLoadind = true
        },
        [singleEditPost.fulfilled]: (state, action) => {
            state.isLoadind = false
            state.isSucces = true
            state.editPost = action.payload
        },
        [singleEditPost.rejected]: (state, action) => {
            state.isLoadind = false
            state.isError = true
            state.message = action.payload
            state.editPost = null
        },
        [updatePost.pending]: (state) => {
            state.isLoading = false
        },
        [updatePost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSucces = true
            state.message = action.payload
        },
        [updatePost.rejected]: (state, action) => {
            state.isLoading = false
            state.isSucces = true
            state.message = action.payload
        }
    }
})

export const { reset } = postSlice.actions

export default postSlice