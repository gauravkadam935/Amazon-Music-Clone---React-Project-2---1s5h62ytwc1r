import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import SensorsIcon from "@mui/icons-material/Sensors";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { Fab } from "@mui/material";
import SearchComponent from "./components/SearchBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { deepOrange } from "@mui/material/colors";
import { logOut, setIsUpdate } from "../../../../App/features/userSlice";
import LINKS from "../../link";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const pages = ["Home", "Podcast", "Library"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
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
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  const handleUpdate = () => {
    dispatch(setIsUpdate());
    navigate("/login");
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
                display: { xs: "block", s: "block", md: "none", lg: "none" },
              }}
            >
              <img
                src="https://assets.stickpng.com/images/62b1e7e056b6848f8bec9034.png"
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
                sx={{
                  ":hover": { color: "#25d1da" },
                  ":focus": { color: "#25d1da" },
                }}
                onClick={() => handleClick("home")}
              >
                <HomeIcon sx={{ mr: "5px" }} />
                <Typography
                  fontSize="16"
                  fontWeight="700"
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
                sx={{
                  fontWeight: "800",
                  ":hover": { color: "#25d1da" },
                  ":focus": { color: "#25d1da" },
                }}
                onClick={() => handleClick("podcasts")}
              >
                <WifiTetheringIcon sx={{ mr: "5px" }} />
                <Typography
                  fontSize="16"
                  fontWeight="700"
                  variant="body2"
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  }}
                >
                  Podcast
                </Typography>
              </Button>
            </Tooltip>
            <Tooltip title="Library" placement="right">
              <Button
                color="primary"
                variant="extended"
                sx={{
                  ":hover": { color: "#25d1da" },
                  ":focus": { color: "#25d1da" },
                }}
                onClick={handleOpenMenu}
              >
                <HeadsetMicIcon
                  sx={{ color: "#FFF", mr: 1 }}
                  fontSize="medium"
                />
                <Typography
                  fontSize="16"
                  fontWeight="700"
                  variant="body2"
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  }}
                >
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
                  sx={{ color: "black" }}
                  onClose={handleCloseMenu}
                  onClick={() => handleClick("libraryMusic")}
                >
                  <IconButton>
                    <Typography varian="body1">Music</Typography>
                  </IconButton>
                </MenuItem>
                <MenuItem
                  key={"Podcasts"}
                  onClose={handleCloseMenu}
                  onClick={() => handleClick("libraryPodcasts")}
                >
                  <IconButton>
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
                {isLogin ? (
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>
                    {user?.name.charAt(0) || ""}
                  </Avatar>
                ) : (
                  <Avatar alt="Remy Sharp" src="" />
                )}
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
                {isLogin ? (
                  <Typography textAlign="center" onClick={handleLogOut}>
                    Log Out
                  </Typography>
                ) : (
                  <Typography
                    textAlign="center"
                    onClick={() => navigate("/login")}
                  >
                    Log IN
                  </Typography>
                )}
              </MenuItem>
              {isLogin && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClose={handleCloseUserMenu}
                    onClick={handleUpdate}
                  >
                    Update Password
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
