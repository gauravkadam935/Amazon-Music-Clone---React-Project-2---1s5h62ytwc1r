import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Fab, Stack } from '@mui/material';
import SongDetails from './songDetails';
import SongList from './songList';
import Loader from '../Loader/Loader'
import { config,ALBUM_URL } from '../../utils/customHook';
import { getSelectedAlbums,loader_Action } from '../../App/features/selectedAlbumSlice';
import { useDispatch, useSelector } from "react-redux";

const songObject=(album)=>{
  return{
    title:album.title,
  imgSrc:album.image,

  artist:album.artists,
  songs:album.songs,
  duration:"03:00",
  releaseDate:album.release,
  }
}
const Playlist = () => {

  let {id} = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const loading = useSelector(state=>state.selectedAlbum.loading);
  const album = useSelector(state=>state.selectedAlbum.selectedAlbum);
  console.log(album);
    useEffect(()=>{
      dispatch(loader_Action());
      axios
      .get(`${ALBUM_URL}/${id}`,config)
      .then((res)=>{
        console.log(res.data.data);
        dispatch(getSelectedAlbums({selectedAlbum:res.data.data}));
        
      })
      .catch((err)=>console.log(err));
    },[]);

    // console.log(songObject(album));
    if(loading) return <Loader/>
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign:'center'
      }}
    >
      <Box flex={1}></Box>
      <Box flex={50}>
        <Box
          component="div"
          style={{
            position: "relative",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <img
            src={album.image}
            style={{
              width: "50%",
              height:'100%',
              aspectRatio:"2/1",
              objectFit: "cover",
              filter: "blur(50px)",
            }}
          />
          <Box
            component="div"
            style={{
              position: "absolute",
              top: 0,
              bottom: "25%",
              left: 0,
              right: 0,
            }}
          >
            <SongDetails {...songObject(album)} />
          </Box>
        </Box>
      </Box>
      <Box flex={1}></Box>
    </Stack>
  )
}

export default Playlist