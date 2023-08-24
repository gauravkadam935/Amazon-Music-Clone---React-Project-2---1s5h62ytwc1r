import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import {getAlbums,isLoader_Action} from "../App/features/albumSlice"

export const config = {
    headers: {
        projectId: "bmc60xnvc646",
      },
  };
  
  export const AUTH_URL = "https://academics.newtonschool.co/api/v1/user/login";
  export const SONG_URL = "https://academics.newtonschool.co/api/v1/music/song";
  export const ALBUM_URL =
    "https://academics.newtonschool.co/api/v1/music/album";
  export const ALL_ARTISTS_URL =
    "https://academics.newtonschool.co/api/v1/music/artist/";

    export const SEARCH_URL = "https://academics.newtonschool.co/api/v1/music/song?filter=";

    export default function useAlbums(){
        const dispatch = useDispatch();
        useEffect(()=>{
          dispatch(isLoader_Action())
            axios
            .get(SONG_URL, config)
            .then((res) => {
              dispatch(getAlbums({ albums: res.data.data }));
            })
            .catch((err) => console.error(err));
        },[])
    }


 