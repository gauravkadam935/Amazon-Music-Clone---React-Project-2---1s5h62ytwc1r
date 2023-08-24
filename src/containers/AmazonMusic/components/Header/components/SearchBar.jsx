import { Box } from "@mui/material";
import React from "react";
import axios from 'axios';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { config,SEARCH_URL } from "../../../../../utils/customHook";
import { useNavigate } from "react-router-dom";

import { getsearchedSong } from "../../../../../App/features/searchSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius + 25,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));




const SearchComponent = () => {
  const dispatch = useDispatch();


  const songs = useSelector(state=>state.searchedSong.searchedSong);
  const [input,setInput] = useState("");
  const [searchedSong,setSearchedSong]=useState([]);
   const navigate = useNavigate();
   const searchObject = JSON.stringify({title:input})

  function fetchCall(){
    try{
    axios
    .get(`${SEARCH_URL}${searchObject}`,config)
    .then((res)=>{
      dispatch(getsearchedSong({searchedSong:res.data.data}));
    })
  }catch(error){
    console.log(error);
  }
  }

  const handleChange = (e)=>{
    setInput(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    fetchCall();
    navigate("/searchedsongs");
  }
  // console.log(songs);
  return (
    <form onSubmit={handleSubmit}>
    <Search sx={{bgcolor:'white',color:'black'}} onClick={()=>navigate("/search")}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={input}
        onChange={handleChange}
      />
    </Search>
    </form>
  );
};

export default SearchComponent;