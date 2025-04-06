import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    direction: 'up',
    count: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        tick: (state) => {
            if (state.direction == 'up') {
                if (state.count < 10) {
                    state.count += 1
                } else {
                    state.direction = 'down'
                    state.count -= 1
                }
            } else {
                if (state.count > 0) {
                    state.count -= 1
                } else {
                    state.direction = 'up'
                    state.count += 1
                }
            }
        }
    }
})

export const { tick } = counterSlice.actions

export default counterSlice.reducer