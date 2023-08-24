import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAudioTrackIndex } from '../../App/features/selectedAlbumSlice';
const SongList = ({
    songs
}) => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const time="3.00";

  return (
    <>
    <Box sx={{color:'white'}}>
        {songs?.map((song,index)=>{
        return <List key={index} onClick={()=>dispatch(setAudioTrackIndex({audioTrackIndex:index}))}>
          <ListItem disablePadding sx={{display:"flex",justifyContent:"space-between",borderBottom:"0.5px solid grey"}}>
            <Box>
            <ListItemButton sx={{gap:2}}>
              <Typography>{index}</Typography>
                <IconButton sx={{width:"55px"}}>
                <img
                src={song.thumbnail}
                alt="logo"
                width="100%"
                height="100%"  
                />
                </IconButton>
                <Typography>{song.title}</Typography>
            </ListItemButton>
            </Box>
            <Box sx={{display:"flex", gap:10}}>
              <Typography sx={{display: { xs: "none", sm: "none", md: "flex", lg: "flex" }}}>{song.title}</Typography>
              <Typography sx={{display: { xs: "none", sm: "none", md: "flex", lg: "flex" }}}>3.00</Typography>
              <Typography>
              <AddIcon/>    
              <MoreHorizIcon/>
              </Typography>
            </Box>
          </ListItem>
        </List>})}
      
    </Box>
    </>
  )
}

export default SongList;



{/* 
            
                
                <ListItemText primary= secondary="hello" />
            <ListItemText primary=/>
            <ListItemText primary=''/>
            
                </ListItemButton>
            </ListItemButton>
            
          </ListItem> */}