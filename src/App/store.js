import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./features/albumSlice"
import selectedAlbumReducer from "./features/selectedAlbumSlice"
import searchSongReducer from "./features/searchSlice";
import userSliceReducer from "./features/userSlice";
const store = configureStore({
    reducer:{
        albums:albumReducer,
        selectedAlbum:selectedAlbumReducer,
        searchedSong:searchSongReducer,
        user:userSliceReducer
    },
})
export default store;