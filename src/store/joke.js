import { createSlice } from '@reduxjs/toolkit'
const jokeSlice = createSlice({
    name: 'category',
    initialState: { joke: {} },
    reducers: {
        selectJoke(state, action) {
            state.joke = action.payload
        }
    }
})

export default jokeSlice;