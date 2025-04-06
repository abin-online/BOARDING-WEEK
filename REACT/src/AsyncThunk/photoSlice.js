import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    photo: null,
    error: null,
    loading: false
}

export const fetchPhoto = createAsyncThunk('fetch/photo', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    const data = response.data
    const randomIndex = Math.floor(Math.random() * 10000) % data.length;
    return data[randomIndex]
})

const photoSlice = createSlice({
    name: 'photoSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhoto.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPhoto.fulfilled, (state, action) => {
                state.loading = false
                state.photo = action.payload
            })
            .addCase(fetchPhoto.rejected, (state) => {
                state.loading = false
                state.error = 'error occured'
            })
    }
})

export default photoSlice.reducer