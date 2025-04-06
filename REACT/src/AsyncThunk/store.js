import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import photoReducer from './photoSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        photo: photoReducer
    }
})

export default store