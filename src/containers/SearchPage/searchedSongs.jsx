import { Card,CardMedia,CardContent,Box, Stack, Typography,Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const SearchedSongs = () => {
  const navigate = useNavigate();
  const searchedSongs = useSelector(state=>state.searchedSong.searchedSong);
  console.log(searchedSongs);
  if(searchedSongs?.length==0) return <h1 style={{color:"white"}}>NO SONGS FOUND</h1>
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
          }}
        >
          <Typography variant="h6" fontWeight="800">
            Trending Songs
          </Typography>
          <Typography>
            <Typography sx={{}}></Typography>
            <Typography>
              <Button sx={{ color: "white" }}>Show More</Button>
            </Typography>
          </Typography>
        </Stack>
      </Box>
      <Splide
        options={{
          drag: "free",
          focus: "left",
          perPage: 6.5,
          perMove: 4,
          speed: 800,
          gap: "1rem",
          height: "14rem",
          pagination: false,
        }}
        className="sound_cloud-discover_music_splide"
        aria-label="My Favorite Images"
      >
        {searchedSongs?.map((song) => (
          <SplideSlide key={song._id}>
            <Stack
              sx={{
                display: "inline",
                overflow: "hidden",
              }}
              // ref={boxRef}
            >
              <Card
                sx={{ bgcolor: "black", color: "white" }}
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
            </Stack>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};

export default SearchedSongs;