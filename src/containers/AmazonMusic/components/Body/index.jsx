import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Cards from "../Card";
import MusicList from "../Card/PlaylistController";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Loader/Loader";

import { useSelector } from 'react-redux';

const Body = () => {  
  
  const showLoading = useSelector(state=>state.albums.showLoading);
  if(showLoading) return <Box textAlign="center"><Loader /></Box>
  return(
      <Box marginBottom="20vh">
        
      <Box sx={{}}>
      <Cards filter="happy" musicPlayList="Featured This Week" />
      </Box>
    <Box sx={{ minWidth: 250 }}>
      <Cards  filter="sad" musicPlayList="Soul Soothers"/>
      </Box>

      <Box sx={{ minWidth: 250 }}>
      <Cards  filter="romantic" musicPlayList="Start a Podcast Habit"/>
      </Box>

      <Box sx={{ minWidth: 250 }}>
      <Cards filter="excited" musicPlayList="Trending Playlists"/>
      </Box>
      </Box>
      
  );
};

export default Body;
