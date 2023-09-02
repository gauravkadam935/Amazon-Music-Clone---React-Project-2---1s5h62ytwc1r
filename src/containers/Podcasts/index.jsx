import React from 'react'
import Body from '../AmazonMusic/components/Body/index.jsx';
import { Box, Button,Fab, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Cards from '../AmazonMusic/components/Card/index.jsx';
import { useNavigate } from 'react-router-dom';
const Podcast = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const songs = location.state;
  console.log(songs);
  return (
    <>
      <Cards filter={"happy"} musicPlayList="Trending Podcasts" />
      <Box sx={{ display:"flex",flexDirection:'column',gap:"16px"}}>
        <Typography color="white">Find A Podcasts</Typography>
        <Typography sx={{ display:"flex",flexWrap:"wrap",gap:"16px"}}>
        <Button sx={{bgcolor:"#434242",color:"white",borderRadius:"25px"}} onClick={()=> navigate("/podcasts/categories/happy")}>Sport</Button>
        <Button sx={{bgcolor:"#434242",color:"white",borderRadius:"25px"}} onClick={()=> navigate("/podcasts/categories/sad")}>News</Button>
        <Button sx={{bgcolor:"#434242",color:"white",borderRadius:"25px"}} onClick={()=> navigate("/podcasts/categories/excited")}>Comedy</Button>
        <Button sx={{bgcolor:"#434242",color:"white",borderRadius:"25px"}} onClick={()=> navigate("/podcasts/categories/romantic")}>Music</Button>
        <Button sx={{bgcolor:"#434242",color:"white",borderRadius:"25px"}} onClick={()=> navigate("/podcasts/categories/happy")}>True Crime</Button>
        <Button sx={{bgcolor:"#434242",color:"white",borderRadius:"25px"}} onClick={()=> navigate("/podcasts/categories/sad")}>Healt & Fitness</Button>
        <Button sx={{bgcolor:"#434242",color:"white",borderRadius:"25px"}} onClick={()=> navigate("/podcasts/categories/excited")}>Business</Button>
        <Button sx={{bgcolor:"#434242",color:"white",borderRadius:"25px"}} onClick={()=> navigate("/podcasts/categories/romantic")}>Technology</Button>
        <Button sx={{bgcolor:"#434242",color:"white",borderRadius:"25px"}} onClick={()=> navigate("/podcasts/categories/happy")}>Goverment</Button>
        </Typography>
      </Box>
    </>
  )
}

export default Podcast