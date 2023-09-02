import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Box,
    Stack,
    Typography,
    Button,
  } from "@mui/material";
  import { useNavigate, useParams } from "react-router-dom";
  import { useSelector } from "react-redux";

const Categories = () => {
    const navigate = useNavigate();
  const songs = useSelector((state) => state.albums.albums);
  let { filter } = useParams();
  return (
    <Box>
      <Typography variant="h6" color="white" textAlign="center">{filter}</Typography>
      <Typography sx={{display:'flex',justifyContent:"center",flexWrap:"wrap",gap:2}}>
        {songs
          ?.filter((song) => song.mood == filter)
          .map((song) => (
            <Card
              sx={{ 
                width:'170px',
                bgcolor: "black", 
                color: "white" }}
              onClick={() => navigate(`/playlist/${song.album}`)}
            >
              <CardMedia
                component="img"
                height="150"
                image={song.thumbnail}
                alt={song.title}
              />
              <CardContent>
                <Typography variant="body2" overflow="hidden">
                  {song.title}
                </Typography>
                <Typography variant="body2" color="0011">
                  {song.artists}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Typography>
    </Box>
  )
}

export default Categories