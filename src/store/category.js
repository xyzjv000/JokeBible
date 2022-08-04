import { createSlice } from '@reduxjs/toolkit'
const categorySlice = createSlice({
    name: 'category',
    initialState: { category: 'ALL' },
    reducers: {
        updateSelected(state, action) {
            state.category = action.payload.toUpperCase()
        }
    }
})

export default categorySlice;