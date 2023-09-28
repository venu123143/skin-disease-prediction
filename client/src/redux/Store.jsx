
import { configureStore } from "@reduxjs/toolkit";
import desieseReducer from "./DesieseSlice"
export const store = configureStore({
    reducer: {
        desiese: desieseReducer
    }
})

