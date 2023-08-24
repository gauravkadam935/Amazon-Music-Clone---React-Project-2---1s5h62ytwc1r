import React from "react";
import { Box, Stack, Typography, Fab } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomTheme from "../customThing/CustomThing";

const PRIMARY_COLOUR = "#0a0b0b";
const SECONDARY_COLOUR = "#0a0b0b";

const PlayListController = ({ playListName, next, prev, box }) => {
  return (
    <Box component="div" sx={{ mb: "5vh", maxWidth: "92dvw" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <Typography variant="h6" color="#FFF">
          {playListName}
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <CustomTheme
          primaryColor={PRIMARY_COLOUR}
          secondaryColor={SECONDARY_COLOUR}
        >
          <Fab color="primary" size="small" onClick={() => prev()}>
            <ChevronLeftIcon />
          </Fab>
          <Fab color="primary" size="small">
            <ChevronRightIcon onClick={() => next()} />
          </Fab>
          <Fab color="primary" variant="extended">
            <Typography variant="button">SEE ALL</Typography>
          </Fab>
        </CustomTheme>
      </Stack>
    </Box>
  );
};

export default PlayListController;