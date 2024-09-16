import { configureStore } from "@reduxjs/toolkit"; // Correct import for configureStore
import authReducer from '../app/features/Auth/AuthSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
})
