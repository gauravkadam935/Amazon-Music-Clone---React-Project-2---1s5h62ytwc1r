import * as React from "react";
import "./style.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import PauseIcon from "@mui/icons-material/Pause";
import { Fab } from "@mui/material";
import SongList from "./songList";
import CustomTheme from "../AmazonMusic/components/customThing/CustomThing";
const primaryColor = "hsl(0, 0%, 100%)";
const secondaryColor = "hsl(183, 71%, 50%)";
import { useSelector, useDispatch } from "react-redux";
import { setPlayerPlaying } from "../../App/features/selectedAlbumSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SongDetails = ({
  title,
  imgSrc,
  artist,
  songs,
  duration,
  releaseDate,
  openModal,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const isPlaying = useSelector((state) => state.selectedAlbum.playerPlaying);

  useEffect(() => {}, [isPlaying]);

  const playPause = () => {
    dispatch(setPlayerPlaying(isPlaying));
  };

  return (
    <>
      <Card
        sx={{
          display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          margin: "50px",
          bgcolor: "inherit",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 300, height: 300 }}
          image={imgSrc}
          alt="Live from space album cover"
        />
        <CustomTheme
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "flex", lg: "block", xl: "block" },
              flexDirection: "column",
              alignItems: {
                xs: "center",
                sm: "center",
                md: "flex-start",
                lg: "flex-start",
              },
            }}
          >
            <CardContent
              sx={{
                display: { xs: "flex", md: "flex", lg: "block", xl: "block" },
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
              }}
            >
              <Typography component="div" variant="subtitle1" color="secondary">
                ALBUM
              </Typography>
              <Typography component="div" variant="h5" color="primary">
                {title}
              </Typography>
              <Typography variant="subtitle1" component="div" color="primary">
                {artist?.map((e) => e.name).join(", ")}
              </Typography>
              <Typography variant="subtitle1" color="primary" component="div">
                {songs?.length}
                {" |"}
                {duration}
                {" |"}
                {new Date(releaseDate).toLocaleString()}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Fab
                variant="extended"
                size="small"
                color="secondary"
                onClick={playPause}
              >
                {isPlaying ? (
                  <PauseIcon color="#333" fontSize="medium" />
                ) : (
                  <PlayArrowIcon color="#333" fontSize="medium" />
                )}
                {isPlaying ? "Pause" : "Play"}
              </Fab>
              {/* onClick={()=>addIconButton(song)} */}
              <IconButton
                aria-label="play/pause"
                color="primary"
                onClick={() => navigate("/upcoming")}
              >
                <AddIcon />
              </IconButton>
              {/* <IconButton aria-label="next" color="primary">
                <SensorsIcon />
              </IconButton> */}
              <IconButton
                aria-label="next"
                color="primary"
                onClick={() => openModal()}
              >
                <ShareIcon />
              </IconButton>
            </Box>
          </Box>
        </CustomTheme>
      </Card>
      <SongList songs={songs} />
      {/* <Premium open={open} setOpen={close} /> */}
    </>
  );
};

export default SongDetails;
