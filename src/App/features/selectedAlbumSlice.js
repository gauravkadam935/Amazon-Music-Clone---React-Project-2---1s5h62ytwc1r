import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    selectedAlbum:{},
    loading:false,
    playerOpen: false,
    audioTrackIndex: 0,
    playerPlaying: false,
}

export const selectedAlbumSlice = createSlice({
    name:"selectedAlbum",
    initialState,
        reducers:{
            getSelectedAlbums:(state,action)=>{
                state.selectedAlbum = action.payload.selectedAlbum;
                state.loading=false;
                state.playerOpen=true;
            },
            loader_Action:(state,action)=>{
            state.loading = true;
            },
            setAudioTrackIndex: (state, action) => {
                state.audioTrackIndex = action.payload.audioTrackIndex;
                state.playerPlaying = true;
              },
              setPlayerPlaying: (state, action) => {
                state.playerPlaying = !action.payload;
              },
        },
    
})

export const {getSelectedAlbums,loader_Action,setAudioTrackIndex, setPlayerPlaying} = selectedAlbumSlice.actions;
export default selectedAlbumSlice.reducer;
