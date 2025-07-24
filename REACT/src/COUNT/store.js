import { configureStore } from "@reduxjs/toolkit";
import counterReduce from './counterSlice'

export const store = configureStore({
    reducer: {
        count: counterReduce
    }
})