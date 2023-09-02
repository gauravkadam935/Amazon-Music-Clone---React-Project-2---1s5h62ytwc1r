import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    albums:[],
    showLoading:false,
    error:"",
}
export const albumSlice= createSlice({
    name:"album",
    initialState,
    reducers:{
        getAlbums:(state,action)=>{
            state.albums=action.payload.albums;
            state.showLoading=false;
            state.error="";
        },
        isLoader_Action:(state,action)=>{
            state.showLoading = true;
        },
        setError:(state,action)=>{
            state.error=action.payload;
            state.showLoading=false;
        }
    }
})

export const {getAlbums,isLoader_Action,setError}= albumSlice.actions
export default albumSlice.reducer;