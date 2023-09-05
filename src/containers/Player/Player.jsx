import React, { useEffect, useRef, useState, useCallback } from "react";

import { Fab, Stack, Menu, MenuItem, IconButton, Box } from "@mui/material";
import Slider from "@mui/material/Slider";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PauseIcon from "@mui/icons-material/Pause";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";

import {
  setAudioTrackIndex,
  setPlayerPlaying,
} from "../../App/features/selectedAlbumSlice";
import CustomTheme from "../AmazonMusic/components/customThing/CustomThing";

import { formatTime } from "./formatTime";
import Animation from "./Animation";

import { useSelector, useDispatch } from "react-redux";

import "./style.css";
import "./progresbar.css";
import { Navigate } from "react-router-dom";

const smallScreenDisplay = {
  display: { xs: "none", sm: "none", md: "inline", lg: "inline" },
};

const smallScreenPlayerDisplay = {
  justifyContent: {
    xs: "flex-end",
    sm: "flex-end",
    md: "center",
    lg: "center",
  },
};

const Player = () => {
  const navigate = useNavigate();
  const { selectedAlbum } = useSelector((state) => state.selectedAlbum);
  const audioTrack = selectedAlbum?.songs;
  const dispatch = useDispatch();
  const currentTrackIndex = useSelector(
    (state) => state.selectedAlbum.audioTrackIndex
  );
  const isPlaying = useSelector((state) => state.selectedAlbum.playerPlaying);

  const [anchorEl, setAnchorEl] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  // const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioVolumeRef = useRef();
  const audioRef = useRef();
  const progressBarRef = useRef();
  const playAnimationRef = useRef();

  const openVolumeMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeVolumeMenu = () => {
    setAnchorEl(null);
  };

  const repeat = useCallback(() => {
    // console.log("run");
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const playPause = () => {
    // setIsPlaying((prevState) => !prevState);
    dispatch(setPlayerPlaying(isPlaying));
  };

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const nextSong = () => {
    if (currentTrackIndex === audioTrack.length - 1) {
      dispatch(setAudioTrackIndex({ audioTrackIndex: 0 }));
    } else
      dispatch(setAudioTrackIndex({ audioTrackIndex: currentTrackIndex + 1 }));
    // setCurrentTrackIndex((prevTrack) =>
    //   prevTrack == audioTrack.length - 1 ? 0 : prevTrack + 1
    // );
    audioRef.current.currentTime = 0;
  };

  const prevSong = () => {
    if (currentTrackIndex == 0)
      dispatch(setAudioTrackIndex({ audioTrackIndex: audioTrack.length - 1 }));
    else
      dispatch(setAudioTrackIndex({ audioTrackIndex: currentTrackIndex - 1 }));
    // setCurrentTrackIndex((prevTrack) =>
    //   prevTrack == 0 ? audioTrack.length - 1 : prevTrack - 1
    // );
    audioRef.current.currentTime = 0;
  };

  const forward_10_sec = () => {
    if (audioRef.current.currentTime + 10 > audioRef.current.duration) return;
    audioRef.current.currentTime += 10;
  };

  const rewind_10_sec = () => {
    if (audioRef.current.currentTime - 10 < 0) return;
    audioRef.current.currentTime -= 10;
  };

  const changeVolumeSliderValue = (event) => {
    let volume = audioVolumeRef.current.value;
    console.log(volume);
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  };

  const repeatTrack = () => {
    audioRef.current.currentTime = 0;
  };

  return (
    <>
      <CustomTheme
        primaryColor={"#FFF"}
        secondaryColor={"hsla(0, 0%, 100%, 0.15)"}
      >
        <audio
          src={audioTrack[currentTrackIndex].audio_url}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={nextSong}
        />

        <Box
          sx={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            alignItems: "center",
          }}
        >
          <div className="progress">
            {/* <span className="time current">{formatTime(timeProgress)}</span> */}
            <input
              type="range"
              defaultValue="0"
              ref={progressBarRef}
              onChange={handleProgressChange}
            />
            {/* <span className="time">{formatTime(duration)}</span> */}
          </div>
          <Stack
            sx={{
              height: 70,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-betwween",
              alignItems: "center",
              gap: { xs: "0.5em", sm: "0.5em", md: "1em", lg: "1em" },
              backgroundColor: "black",
            }}
          >
            <Box
              component="div"
              flex={4}
              sx={{
                textAlign: "left",
                ml: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1em",
              }}
            >
              {isPlaying ? (
                <Animation />
              ) : (
                <img
                  src={audioTrack[currentTrackIndex].thumbnail}
                  width="45px"
                  height="45px"
                  style={{ borderRadius: "5px" }}
                />
              )}
              <Box component="div" sx={{ textAlign: "left" }}>
                <p
                  style={{
                    color: "#FFF",
                    textAlign: "left",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontSize: "1.0rem",
                    width: "150px",
                    margin: 0,
                  }}
                >
                  {audioTrack[currentTrackIndex].title}
                </p>
                <p
                  style={{
                    color: "grey",
                    textAlign: "left",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontSize: "0.7rem",
                    width: "150px",
                    margin: 0,
                  }}
                >
                  {audioTrack[currentTrackIndex].title}
                </p>
              </Box>
            </Box>
            <Box
              component="div"
              flex={10}
              sx={{
                display: "flex",
                ...smallScreenPlayerDisplay,
                // gap: "0.5em",
                alignItems: "center",
                textAlign: "left",
                color: "primary",
              }}
            >
              <IconButton
                color="primary"
                sx={{ ...smallScreenDisplay }}
                onClick={repeatTrack}
              >
                <RepeatIcon />
              </IconButton>
              <IconButton
                color="primary"
                sx={{ ...smallScreenDisplay }}
                onClick={rewind_10_sec}
              >
                <Replay10Icon />
              </IconButton>
              <IconButton
                color="primary"
                sx={{ ...smallScreenDisplay }}
                onClick={prevSong}
              >
                <SkipPreviousIcon />
              </IconButton>
              <Fab color="secondary" size="small" onClick={playPause}>
                {isPlaying ? (
                  <PauseIcon color="primary" fontSize="large" />
                ) : (
                  <PlayArrowIcon color="primary" fontSize="large" />
                )}
              </Fab>
              <IconButton color="primary" onClick={nextSong}>
                <SkipNextIcon />
              </IconButton>
              <IconButton
                color="primary"
                sx={{ ...smallScreenDisplay }}
                onClick={forward_10_sec}
              >
                <Forward10Icon />
              </IconButton>
              <IconButton
                color="primary"
                sx={{ ...smallScreenDisplay }}
                onClick={() => navigate("/upcoming")}
              >
                <ShuffleIcon />
              </IconButton>
            </Box>
            <Box component="div" flex={4} sx={{ textAlign: "right" }}>
              <IconButton
                color="primary"
                sx={{ mr: 3 }}
                onClick={openVolumeMenu}
              >
                <VolumeUpIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={closeVolumeMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <CustomTheme primaryColor={"#333"} secondaryColor={"#FFF"}>
                  <MenuItem sx={{ color: "primary" }}>
                    <input
                      type="range"
                      defaultValue="0"
                      min={0}
                      max={100}
                      ref={audioVolumeRef}
                      id="audioVolume"
                      style={{ width: "100px" }}
                      onChange={changeVolumeSliderValue}
                    />
                  </MenuItem>
                </CustomTheme>
              </Menu>
            </Box>
          </Stack>
        </Box>
      </CustomTheme>
    </>
  );
};

export default Player;
