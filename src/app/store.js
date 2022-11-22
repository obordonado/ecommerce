import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../containers/userSlice";


export const store = configureStore({
    reducer: {
        user: userSlice
    }
})

