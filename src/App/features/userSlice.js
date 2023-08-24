import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLogin:false,
}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        setIsLogin: (state, action) => {
            state.isLogin = true;
        }

    }
})
export const {setUser,setIsLogin} = userSlice.actions;
export default userSlice