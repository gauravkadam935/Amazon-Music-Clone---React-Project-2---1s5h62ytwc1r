import * as React from 'react';
import { useRef,useEffect,useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Button, Stack } from '@mui/material';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Box } from '@mui/material';
import PlayListController from './PlaylistController';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { PlayArrowOutlined } from '@mui/icons-material';
// const filterObj ={
  // var mood:"happy"
 
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards({filter,musicPlayList}) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const songs = useSelector(state=>state.albums.albums);
  
  const [perPage,setPerPage] = useState(window.innerWidth < 900 ? (window.innerWidth < 600 ? 2.5 : 4.5) : 6.5); 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) setPerPage(1.5);
      else if (window.innerWidth < 600) setPerPage(2.5);
      else if (window.innerWidth < 900) setPerPage(3.5);
      else setPerPage(4.5);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const boxRef = useRef();
  const nextCards = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    console.log(width);
    console.log(boxRef);
    console.log(boxRef.current.scrollLeft);
  };
  const prevCards = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    console.log(width);
    console.log(boxRef.current.scrollLeft);
  };
  return (
    <>
    
    <Box className="songcard" sx={{bgcolor:'black',color:'white',padding:'20px'}}>
      <Box component='div' >
      {/* <PlayListController playListName={musicPlayList} prev={prevCards} next={nextCards} box={boxRef}/> */}
        <Stack 
          sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:'0px'
          }}
        >
      <Typography variant="h6" fontWeight="800">{musicPlayList}</Typography>
      <Typography>
        <Typography sx={{}}></Typography>
        <Typography><Button sx={{color:'white'}}
        onClick={()=>navigate(`/Allsongs/${filter}`)}
        >Show More</Button></Typography>
      </Typography>
      </Stack>
      </Box>
    <Splide
    options={{
      drag: "free",
      focus: "left",
      perPage: perPage,
      perMove: 4,
      speed: 800,
      gap: "1rem",
      height: "14rem",
      pagination: false,
    }}
    className="sound_cloud-discover_music_splide"
    aria-label="My Favorite Images"
    
  >
    {songs.filter(song=>song.mood == filter).map(song=>(
      <SplideSlide key={song._id} >
        <Stack  sx={{
          
        display:"inline",
        overflow:"hidden"
      }}  ref={boxRef}>
      
      <Card className='song-card' sx={{bgcolor:'black',color:"white"}} onClick={()=> navigate(`/playlist/${song.album}`)} >
        {/* <PlayArrowOutlined/> */}
      <CardMedia
        component="img"
        height="150"
        image={song.thumbnail}
        alt={song.title}
      />
      <CardContent>
        <Typography variant="subtitle1"  overflow="hidden">
          {song.title}
        </Typography>
        <Typography variant="subtitle3" color="0011">
          {song.artists}
        </Typography>
      </CardContent>      
    </Card>
    </Stack>
    </SplideSlide>
    
    )
  )}
    </Splide>
    </Box>
  </>
  );
}