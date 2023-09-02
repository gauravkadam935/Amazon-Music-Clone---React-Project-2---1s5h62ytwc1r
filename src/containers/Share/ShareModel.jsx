import React, { useState } from "react";
import { useLocation } from "react-router";
import {
  Divider,
  Typography,
  Fab,
  Tooltip,
  Modal,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import CopyAllIcon from "@mui/icons-material/CopyAll";

import CustomTheme from "../AmazonMusic/components/customThing/CustomThing";
import { useNavigate } from "react-router-dom";
// import { MODAL_COLOR, MODAL_STYLE } from "../AmazonMusic/constants";
// import MessageComponent from "../MessageComponent";
import {
  shareOnTwitter,
  copyToClipboard,
  shareOnFacebook,
} from "../../utils/customHook";
import { FacebookRounded, Twitter } from "@mui/icons-material";

const BASE_URL = "http://localhost:5173";

const ShareModal = ({ open, close, title, description, imgSrc, _id }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const handleClose = () => close();
  const [msgOpen, setMsgOpen] = useState(false);
  const faceBookShare = () => {
    // shareOnFacebook(title, BASE_URL + pathname);
    setMsgOpen(true);
  };

  const twitterShare = () => {
    shareOnTwitter(title, BASE_URL + pathname);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.92)",
            boxShadow: 24,
            p: 4,
            paddingTop: 5,
          }}
        >
          <CustomTheme primaryColor="rgb(37, 209, 218)" secondaryColor="#FFF">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1em",
                position: "relative",
                width: { lg: "40%", md: "70%", sm: "80%", xs: "90%" },
              }}
            >
              <Box component="div" sx={{ textAlign: "right", width: "100%" }}>
                <Tooltip onClick={handleClose} placement="top" title="Close">
                  <IconButton size="small" color="inherit">
                    <DisabledByDefaultIcon color="secondary" />
                  </IconButton>
                </Tooltip>
              </Box>
              <Typography
                variant="h5"
                component="h2"
                color="secondary"
                sx={{
                  fontFamily: `Helvetica Arial "sans-serif"`,
                  fontSize: "18",
                  textOverFlow: "ellipsis",
                }}
              >
                Share this playlist
              </Typography>
              <Box
                component="div"
                sx={{
                  width: "100%",
                  height: 120,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "0.5em",
                }}
              >
                <Box
                  component="div"
                  flex={1}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: "0.5em",
                  }}
                ></Box>
                <Box
                  component="div"
                  flex={5}
                  sx={{
                    display: "flex",
                    flexDirection: "Column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "0.3em",

                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    color="rgb(37, 209, 218)"
                    sx={{
                      fontSize: 15,
                      fontFamily: `"Sharp Grotesk" "Semi Bold 20" Helvetica Arial "sans-serif"`,
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Album
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#FFf"
                    noWrap
                    sx={{ width: 200 }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
                    {description}
                  </Typography>
                </Box>
              </Box>
              <Box component="div" sx={{ width: "100%" }}>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
                  Share link
                </Typography>
                <Typography variant="body1" color="#FFF">
                  {BASE_URL + pathname}
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box flex={4}>
                  <Fab
                    size="small"
                    sx={{
                      bgcolor: "hsl(0, 1%, 26%)",
                      color: "white",
                      ":hover": {
                        backgroundColor: "hsl(0, 1%, 15%)",
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={twitterShare}
                  >
                    <Twitter />
                  </Fab>
                  <Fab
                    size="small"
                    sx={{
                      bgcolor: "hsl(0, 1%, 26%)",
                      color: "white",
                      size: "small",
                      mr: 2,
                      ":hover": {
                        backgroundColor: "hsl(0, 1%, 15%)",
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() => navigate("/upcoming")}
                  >
                    <FacebookRounded />
                  </Fab>
                </Box>
                <Box flex={2}>
                  <Fab
                    size="small"
                    variant="extended"
                    sx={{
                      bgcolor: "hsl(0, 1%, 26%)",
                      color: "white",
                      width: "100%",
                      ":hover": {
                        backgroundColor: "hsl(0, 1%, 15%)",
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() => copyToClipboard(BASE_URL + pathname)}
                  >
                    <CopyAllIcon />
                    <Typography
                      variant="button"
                      sx={{
                        ml: 1,
                        display: {
                          xs: "none",
                          sm: "none",
                          md: "inline-block",
                          lg: "inline-block",
                        },
                      }}
                    >
                      Copy link
                    </Typography>
                  </Fab>
                </Box>
              </Box>
            </Box>
          </CustomTheme>
        </Box>
      </Modal>
      {/* {
        <MessageComponent
          open={msgOpen}
          setOpen={setMsgOpen}
          msg={"Feature coming soon"}
          time={4000}
        />
      } */}
    </>
  );
};

export default ShareModal;
