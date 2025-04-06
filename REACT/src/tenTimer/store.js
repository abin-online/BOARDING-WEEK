import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './tenCounter'
const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default store