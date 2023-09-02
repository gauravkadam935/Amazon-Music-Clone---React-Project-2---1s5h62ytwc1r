import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SongCard from "../AmazonMusic/components/Card/songCard";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Genres = () => {
  const navigate = useNavigate();
  const songs = useSelector((state) => state.albums.albums);
  let { filter } = useParams();
  console.log(filter);
  return (
    <Box>
      <Typography variant="h6" color="white" textAlign="center">
        All
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {songs
          ?.filter((song) => song.mood == filter)
          .map((song) => (
            <SongCard song={song} />
          ))}
      </Typography>
    </Box>
  );
};

export default Genres;
