// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios'
// const initialState = {
//     user: null,
//     loading: false,
//     error: null
// }


// export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
//     const response = await axios.get(`https://randomuser.me/api/`);
//     return response.data.results[0];
// })

// const userSlice = createSlice({
//     name: 'userSlice',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//         .addCase(fetchUser.pending, (state)=> {
//             state.loading = true;
//             state.error = null
//         })
//         .addCase(fetchUser.fulfilled, (state, action)=> {
//             state.loading = false;
//             state.user = action.payload;
//         })
//         .addCase(fetchUser.rejected, (state)=> {
//             state.loading = false;
//             state.error = 'Something went wrong'
//         })
//     }
// });

// export default userSlice.reducer

import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data.results[0]
})

const initialState = {
    user: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'userSlice',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null
            })
            .addCase(fetchUser.rejected, (state) => {
                state.loading = false;
                state.error = 'something wrong happened !'
            })
    }
})

export default userSlice.reducer