import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLogin:false,
    isPrimium:true,
    savedSongs:[],
    isUpdate:false,
}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.userDetails;
            state.isLogin=true;
        },
        setIsLogin: (state, action) => {
            state.isLogin = true;
        },
        setSavedSongs:(state,action)=>{
            const {_id}= action.payload.savedSongs;
            const songfoundIndex = state.savedSongs.findIndex((song)=>song._id==_id);
            if(songfoundIndex>-1){
                state.savedSongs.splice(songfoundIndex,1);
            }else{
                state.savedSongs.push(action.payload.savedSongs);
            }
        },
        logOut:(state,)=>{
            state.user = {};
            state.isLogin=false;
        },
        setIsUpdate:(state)=>{
            state.isUpdate = true;
        },
        updatePassword:(state,action)=>{
            state.user.token = action.payload;
        }
    }
})
export const {setUser,setIsLogin,setSavedSongs,logOut,setIsUpdate,updatePassword} = userSlice.actions;
export default userSlice.reducer;