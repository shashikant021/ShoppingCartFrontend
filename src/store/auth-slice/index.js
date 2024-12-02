import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    user: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState
})