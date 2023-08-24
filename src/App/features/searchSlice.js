import { createSlice } from "@reduxjs/toolkit";

const initialState={
    searchedSong:[],
};

export const searchSongSlice = createSlice({
    name:"searchedSong",
    initialState,
    reducers:{
        getsearchedSong:(state,action)=>{
            state.searchedSong = action.payload.searchedSong;
        }
    }
})
export const{getsearchedSong} = searchSongSlice.actions;
export default searchSongSlice.reducer