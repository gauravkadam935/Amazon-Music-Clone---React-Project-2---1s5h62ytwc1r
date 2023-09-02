import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PlayListController from "./PlaylistController";
import { Box, Fab, Chip, Typography } from "@mui/material";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CustomTheme from "../customThing/CustomThing";
const SongCard = ({ song }) => {
  const [isHoverd, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <CustomTheme
      primaryColor={"#FFF"}
      secondaryColor={"hsla(0, 0%, 100%, 0.15)"}
    >
      <Card
        sx={{
          bgcolor: "black",
          color: "white",
          paddingLeft: "6px",
          paddingRight: "6px",
          cursor: "pointer",
          boxShadow: "5px 5px 10px hsla(0, 0%, 5%, 0.6)",
          ":hover": {
            boxShadow: "5px 5px 10px hsla(0, 0%, 8%, 0.6)",
            transform: "scale(1.05)",
            transition: "transform 500ms ease-in-out",
          },
        }}
        onClick={() => navigate(`/playlist/${song.album}`)}
      >
        <Box
          sx={{
            position: "relative",
            ":hover": { bgcolor: "rgba(0, 5, 0.5,0.8)" },
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          {isHoverd && (
            <Fab
              color="secondary"
              size="small"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                ":hover": {
                  bgcolor: "rgba(0, 5, 0.5,0.8)",
                  boxShadow: "5px 5px 10px hsla(0, 0%, 8%, 0.6)",
                  transform: "translate(-50%,-40%)",
                  transition: "transform 500ms ease-in-out",
                },
              }}
            >
              <PlayArrowIcon color="primary" fontSize="large" />
            </Fab>
          )}
          <CardMedia
            component="img"
            height="150"
            sx={{
              borderRadius: "10px",
              ":hover": {},
            }}
            image={song.thumbnail}
            alt={song.title}
            onClick={() => navigate(`/playlist/${song.album}`)}
          />
        </Box>
        <CardContent>
          <Typography
            noWrap
            sx={{ width: 100, fontSize: "0.9rem", fontWeight: 530 }}
          >
            {song.title}
          </Typography>
          <Typography
            noWrap
            sx={{ width: 100, fontSize: "0.8rem", color: "gray" }}
          >
            {song?.artist?.map((e) => e.name).join(" ")}
          </Typography>
        </CardContent>
      </Card>
    </CustomTheme>
  );
};

export default SongCard;
