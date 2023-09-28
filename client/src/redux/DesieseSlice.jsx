import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    value: "this is redux"
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        printingValue: (state, action) => {
            state.value = action.payload
        }
    }

})

export const { printingValue } = authSlice.actions
export default authSlice.reducer