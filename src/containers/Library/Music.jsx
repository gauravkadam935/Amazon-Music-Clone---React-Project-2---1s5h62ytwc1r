import { FacebookRounded, Twitter } from '@mui/icons-material'
import { Box, Button, Fab, Typography } from '@mui/material'
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import React from 'react'
import SavedSongs from '../savedSongs/SavedSongs';
import { useNavigate } from 'react-router-dom';

const Music = () => {
  
  const { savedSongs } = useSelector((state) => state.user);
  return (
    <>
        {savedSongs?.length>0 && <SavedSongs/>}
        {savedSongs?.length==0 && <EmptyBox/>}
    </>
  )
}

export default Music

export const EmptyBox=()=>{
  const navigate = useNavigate();
  return(
    <Box>
    <Box sx={{
      marginTop:"80px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      gap:2,
      color:'white'
    }}>
      <Typography variant='h6'>Start listening and add to your library</Typography>
      <Typography variant=''>Come back to view your history and favorites here</Typography>
      <Button onClick={()=>navigate("/")}>Explore</Button>
    </Box>
    </Box>
  )
}

