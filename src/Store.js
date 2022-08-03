import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./features/auth/authSlice"
import postSlice from "./features/posts/postSlice"

const Store = configureStore({
    reducer : {
        auth : authSlice.reducer,
        post : postSlice.reducer
    }
})

export default Store