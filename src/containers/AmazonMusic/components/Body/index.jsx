import React, { useEffect, useState } from "react";
import Cards from "../Card";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Loader/Loader";

import { useSelector } from "react-redux";

const Body = () => {
  const showLoading = useSelector((state) => state.albums.showLoading);
  const error = useSelector((state) => state.albums.error);
  if (showLoading)
    return (
      <Box textAlign="center">
        <Loader />
      </Box>
    );
  return (
    <Box marginBottom="140px">
      <Box sx={{ minWidth: 200 }}>
        <Cards filter="happy" musicPlayList="Featured This Week" />
      </Box>
      <Box sx={{ minWidth: 200 }}>
        <Cards filter="sad" musicPlayList="Soul Soothers" />
      </Box>

      <Box sx={{ minWidth: 200 }}>
        <Cards filter="romantic" musicPlayList="Start a Podcast Habit" />
      </Box>

      <Box sx={{ minWidth: 200 }}>
        <Cards filter="excited" musicPlayList="Trending Playlists" />
      </Box>
    </Box>
  );
};

export default Body;
