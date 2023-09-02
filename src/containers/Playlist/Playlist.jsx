import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { Fab, Stack } from "@mui/material";
import SongDetails from "./songDetails";
import SongList from "./songList";
import Loader from "../Loader/Loader";
import ShareModel from "../Share/ShareModel.jsx";
import { config, ALBUM_URL } from "../../utils/customHook";
import {
  getSelectedAlbums,
  loader_Action,
  setLoginError,
} from "../../App/features/selectedAlbumSlice";
import { useDispatch, useSelector } from "react-redux";
import ErrorPage from "../Error/Error";

const songObject = (album) => {
  return {
    _id: album.id,
    title: album.title,
    imgSrc: album.image,

    artist: album.artists,
    songs: album.songs,
    duration: "03:00",
    releaseDate: album.release,
    description: album.description,
  };
};
const Playlist = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  let { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.selectedAlbum.loading);
  const album = useSelector((state) => state.selectedAlbum.selectedAlbum);
  const loginError = useSelector((state) => state.selectedAlbum.loginError);
  console.log(album);
  useEffect(() => {
    dispatch(loader_Action());
    axios
      .get(`${ALBUM_URL}/${id}`, config)
      .then((res) => {
        console.log(res.data.data);
        dispatch(getSelectedAlbums({ selectedAlbum: res.data.data }));
      })
      .catch((err) => {
        dispatch(setLoginError());
        console.log(err);
      });
  }, []);

  const openModal = () => setShareModalOpen(true);
  const closeModal = () => setShareModalOpen(false);
  // console.log(songObject(album));
  if (loading)
    return (
      <Box sx={{ textAlign: "center" }}>
        <Loader />
      </Box>
    );
  if (loginError) return <ErrorPage />;
  return (
    <>
      <ShareModel
        open={shareModalOpen}
        close={closeModal}
        {...songObject(album)}
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 100,
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
                width: "80%",
                height: "100%",
                aspectRatio: "2/1",
                objectFit: "cover",
                filter: "blur(50px)",
              }}
            />
            <Box
              component="div"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
              }}
            >
              <SongDetails {...songObject(album)} openModal={openModal} />
            </Box>
          </Box>
        </Box>
        {/* <Box flex={1}></Box> */}
      </Stack>
    </>
  );
};

export default Playlist;
