import React from 'react'
import ResponsiveAppBar from '../AmazonMusic/components/Header'
import Player from '../Player/Player'
import { useSelector } from 'react-redux';

const Layout = ({children}) => {
  const isPlaying = useSelector((state) => state.selectedAlbum.playerOpen);
  return (
    <>
    <ResponsiveAppBar/>
    {children}
    {isPlaying && <Player/>} 
    </>
  )
}
export default Layout