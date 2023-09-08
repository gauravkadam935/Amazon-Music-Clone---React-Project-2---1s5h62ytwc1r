import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { Stack, Button, Fab, Chip } from "@mui/material";
import SongCard from "../AmazonMusic/components/Card/songCard";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SavedSongs = () => {
  const navigate = useNavigate();
  const songs = useSelector((state) => state.user.savedSongs);
  const array = [...songs].reverse();
  return (
    <Box
      className="songcard"
      sx={{ bgcolor: "black", color: "white", padding: "20px" }}
    >
      <Box component="div">
        {/* <PlayListController playListName={musicPlayList} prev={prevCards} next={nextCards} box={boxRef}/> */}

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0px",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h6" fontWeight="800">
            My Playlist
          </Typography>
          <Typography>
            <Typography>
              <Chip
                label="Clear"
                variant="outlined"
                onClick={() => {}}
                sx={{ bgcolor: "", color: "white", size: "small" }}
              />
            </Typography>
            <Typography>
              {/* <Chip
                label="Show More"
                variant="outlined"
                onClick={() => navigate(`/Allsongs/${filter}`)}
                sx={{ bgcolor: "", color: "white", size: "small" }}
              /> */}
            </Typography>
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "left",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {array?.map((song) => (
            <SongCard song={song} />
          ))}
        </Typography>
      </Box>
    </Box>
  );
};

export default SavedSongs;
