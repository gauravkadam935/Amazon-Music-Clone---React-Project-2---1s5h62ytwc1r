import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAudioTrackIndex } from "../../App/features/selectedAlbumSlice";
import { setSavedSongs } from "../../App/features/userSlice";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const SongList = ({ songs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);
  const savedSongs = useSelector((state) => state.user.savedSongs);
  const audioTrackIndex = useSelector(
    (state) => state.selectedAlbum.audioTrackIndex
  );
  const isPlaying = useSelector((state) => state.selectedAlbum.playerPlaying);
  const time = "3.00";

  const addIconButton = (song) => {
    // console.log(song);
    if (isLogin) {
      dispatch(setSavedSongs({ savedSongs: song }));
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Box sx={{ color: "white" }}>
        {songs?.map((song, index) => {
          return (
            <List key={index}>
              <ListItem
                disablePadding
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "0.5px solid grey",
                  ":hover": { color: "#25d1da" },
                  color: audioTrackIndex == index ? "#25d1da" : "#FFF",
                }}
              >
                <Box
                  onClick={() =>
                    dispatch(setAudioTrackIndex({ audioTrackIndex: index }))
                  }
                >
                  <ListItemButton sx={{ gap: 2 }}>
                    <Typography>{index}</Typography>
                    <IconButton sx={{ width: "55px", position: "relative" }}>
                      <img
                        src={song.thumbnail}
                        alt="logo"
                        width="100%"
                        height="100%"
                      />
                      <PlayArrowIcon
                        sx={{ position: "absolute", left: "25%" }}
                      />
                      {/* <PlayArrow /> */}
                    </IconButton>
                    <Box sx={{ display: "flex" }}>
                      <Typography>{song.title}</Typography>
                      {/* <Typography
                        sx={{
                          display: {
                            xs: "none",
                            sm: "none",
                            md: "flex",
                            lg: "flex",
                          },
                        }}
                      >
                        {song.title}
                      </Typography> */}
                    </Box>
                  </ListItemButton>
                </Box>
                <Box sx={{ display: "flex", gap: 30 }}>
                  <Typography
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "flex",
                        lg: "flex",
                      },
                    }}
                  >
                    3.00
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "50px", paddingRight: "10px" }}
                  >
                    <Box onClick={() => addIconButton(song)}>
                      {savedSongs?.some((ele) => ele._id == song._id) ? (
                        <RemoveCircleOutlineIcon />
                      ) : (
                        <AddIcon />
                      )}
                    </Box>
                    <Box onClick={() => navigate("/upcoming")}>
                      <MoreHorizIcon />
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            </List>
          );
        })}
      </Box>
    </>
  );
};

export default SongList;
