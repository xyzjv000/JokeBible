import categorySlice from "./category";
import { configureStore } from '@reduxjs/toolkit'
import jokeSlice from "./joke";
const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        joke: jokeSlice.reducer
    }
})


export const categoryAction = categorySlice.actions;
export const jokeAction = jokeSlice.actions;
export default store;