import { configureStore } from "@reduxjs/toolkit";
import couterSlice from './slices/counter'


export const store = configureStore({
    reducer: {
        counter: couterSlice,
    },
})

// for making type Safety
export type RootState = ReturnType<typeof store.getState>; // when u put any state inside of store thats comming Here.   
export type AppDispatch = typeof store.dispatch;