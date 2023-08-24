import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./features/albumSlice"
import selectedAlbumReducer from "./features/selectedAlbumSlice"
import searchSongReducer from "./features/searchSlice";
import userReducer from "./features/userSlice";
const store = configureStore({
    reducer:{
        albums:albumReducer,
        selectedAlbum:selectedAlbumReducer,
        searchedSong:searchSongReducer,
        user:userReducer,
    },
})
export default store;