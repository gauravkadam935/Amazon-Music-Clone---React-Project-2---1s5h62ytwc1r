import React from 'react'

import Cards from '../AmazonMusic/components/Card/index.jsx';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Podcast = () => {
  const location = useLocation();
  const songs = location.state;
  console.log(songs);
  return (
    <>
      <Box>
        {/* <Cards songs={songs} filter="happy" musicPlayList="Featured This Week"/> */}
      </Box>
    </>
  )
}

export default Podcast