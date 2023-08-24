import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SensorsIcon from "@mui/icons-material/Sensors";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import PauseIcon from "@mui/icons-material/Pause";

import ShuffleIcon from "@mui/icons-material/Shuffle";
import { Fab } from "@mui/material";
import SongList from "./songList";
import CustomTheme from "../AmazonMusic/components/customThing/CustomThing";
const primaryColor = "hsl(0, 0%, 100%)";
const secondaryColor = "hsl(183, 71%, 50%)";
import {useSelector,useDispatch} from 'react-redux'
import {setPlayerPlaying} from '../../App/features/selectedAlbumSlice'
import { useEffect } from "react";


const SongDetails = ({
  title,
  imgSrc,
  artist,
  songs,
  duration,
  releaseDate,
}) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.selectedAlbum.playerPlaying);

  useEffect(()=>{

  },[isPlaying]);

  const playPause = () => {
    dispatch(setPlayerPlaying(isPlaying));
  };

  return (
    <>
      <Card
        sx={{
          display: { xs: "block", sm: "block", md: "flex", xl: "flex" },
          margin: "50px",
          textAlign: "center",
          bgcolor:'inherit'
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography component="div" variant="subtitle1" color="secondary">
              ALBUM
            </Typography>
            <Typography component="div" variant="h5" color="primary">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              color="primary"
            >
              {artist?.map((e)=>e.name).join(", ")}
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              component="div"
            >
              {songs?.length}
              {" |"}
              {duration}
              {" |"}
              {releaseDate}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            
              <Fab variant="extended" color="secondary" onClick={playPause}>
              {isPlaying ? (
                <PauseIcon color="primary" fontSize="large"/> 
              ) : (
                <PlayArrowIcon color="primary" fontSize="large"/>
              )}
              {isPlaying ? (
                "Pause"
              ) : (
                "Play"
              )}
              </Fab>
            
            <IconButton aria-label="play/pause" color="primary">
              <AddIcon />
            </IconButton>
            <IconButton aria-label="next" color="primary">
              <SensorsIcon />
            </IconButton>
            <IconButton aria-label="next" color="primary" >
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
