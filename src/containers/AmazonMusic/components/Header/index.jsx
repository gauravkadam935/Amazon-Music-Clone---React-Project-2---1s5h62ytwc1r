import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import SensorsIcon from "@mui/icons-material/Sensors";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { Fab } from "@mui/material";
import SearchComponent from "./components/SearchBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


import LINKS from "../../link";
import { useNavigate } from "react-router-dom";
const pages = ["Home", "Podcast", "Library"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const style={
//   backgroundColor:"black",
//   &:hover:{
//     color:"#279EFF",
//   }
// }
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (name) => {
    navigate(LINKS[name]);
  };

  const [anchorEl, setAnchorEl] = useState(null);
 
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handlechange = (e) => {
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000",
        fontSize: "13px",
        borderBottom: "0.5px solid grey",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              justifyContent: "flex-start",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <IconButton
              sx={{
                p: 0,
                width: "100px",
                display: { xs: "none", md: "block", l: "block" },
              }}
            >
              <img
                src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg"
                alt="logo"
                width="100%"
                height="100%"
              />
            </IconButton>
            <IconButton
              sx={{
                p: 0,
                display: { xs: "block", s: "block", md: "none", l: "none" },
              }}
            >
              <img
                src="src\assets\logo3.png"
                alt="logo"
                width="80px"
                height="100%"
              />
            </IconButton>
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
          <Tooltip title="Home" placement="bottom">
            <Button
              color="primary"
              variant="extended"
              sx={{ hover: { backgroundColor: "#a9a9a9" } }}
              onClick={() => handleClick("home")}
            >
              <HomeIcon />
              <Typography
                variant="body2"
                sx={{
                  display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                }}
              >
                Home
              </Typography>
            </Button>
            </Tooltip>
            <Tooltip title="Podcast" placement="bottom">
            <Button
              color="primary"
              variant="extended"
              sx={{}}
              onClick={() => handleClick("podcasts")}
            >
              <SensorsIcon />
              <Typography
                variant="body2"
                sx={{
                  display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                }}
              >
                Podcast
              </Typography>
            </Button>
            </Tooltip>

            {/* <Button
              color="primary" variant="extended"
              sx={{ color: "white", my: 1, bgcolor: "#000" }}
            >
              <HeadsetMicIcon />
              <Typography
                  variant="body2"
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  }}
                >
                  Library
                </Typography>
            </Button> */}

            <Tooltip title="Library" placement="right">
              <Button variant="extended"  sx={{bgcolor:"black",hover:{color:"red"}}} onClick={handleOpenMenu}>
                <HeadsetMicIcon
                  sx={{ color: "#FFF", mr: 1 }}
                  fontSize="medium"
                />
                {/* sx={{ ...HEADER_BTN_DISPLAY }} */}
                <Typography variant="body2"  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  }} >
                  Library
                </Typography>
                <KeyboardArrowDownIcon
                  sx={{ color: "#FFF", ml: 1 }}
                  fontSize="medium"
                />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleCloseMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem
                  key={"music"}
                  color="primary"
                  divider="true"
                  sx={{ color: "hsl(0, 0%, 10%)" }}
                >
                  <IconButton onClick={() => handleClick("libraryMusic")}>
                    <Typography varian="body1">Music</Typography>
                  </IconButton>
                </MenuItem>
                <MenuItem key={"Podcasts"}>
                  <IconButton onClick={() => handleClick("libraryPodcasts")}>
                    <Typography varian="body1">Podcasts</Typography>
                  </IconButton>
                </MenuItem>
              </Menu>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              }}
            >
              <SearchComponent />
            </Box>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Log Out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
