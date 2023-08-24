import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    albums:[],
    showLoading:false,
}
export const albumSlice= createSlice({
    name:"album",
    initialState,
    reducers:{
        getAlbums:(state,action)=>{
            state.albums=action.payload.albums;
            state.showLoading=false;
        },
        isLoader_Action:(state,action)=>{
            state.showLoading = true;
        }
    }
})

export const {getAlbums,isLoader_Action}= albumSlice.actions
export default albumSlice.reducer;