import { useState } from 'react'
import './App.css';
import { Route,Router, Routes } from 'react-router-dom'
import AmazonMusic from './containers/AmazonMusic'
import links from './containers/AmazonMusic/link'
import Podcasts from './containers/Podcasts'
import Layout from './containers/Layout/Layout'
import Login from './containers/Login'
import Playlist from './containers/Playlist/Playlist'
import Music from './containers/AmazonMusic/components/Card/PlaylistController'
import MyPodcast from './containers/Library/MyPodcast'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchComponent from './containers/AmazonMusic/components/Header/components/SearchBar'
import SearchPage from './containers/SearchPage/SearchBar'

import useAlbums from './utils/customHook';
import Genres from './containers/genres/genres';
import SearchedSongs from './containers/SearchPage/searchedSongs';
import Register from './containers/signup/register';

function App() {
  useAlbums();
  const router = createBrowserRouter([
    {
      path: links.home,
      element: (
          <Layout>
            <AmazonMusic />
          </Layout>  
      ),
      errorElement: <Error />,
    },
    {
      path: links.podcasts,
      element: (
        <Layout>
          <Podcasts />
        </Layout>
      ),
    },
    {
      path: `${links.playlist}/:id`,
      element: (
        <Layout>
          <Playlist />
        </Layout>
      ),
    },
    {
      path: links.login,
      element: <Login />,
    },
    {
      path:links.signup,
      element: <Register/>,
    },

    {
      path: links.libraryPodcasts,
      element: (
        <Layout>
          <MyPodcast />
        </Layout>
      ),
    },
    {
      path: links.libraryMusic,
      element: (
        <Layout>
          <Music />
        </Layout>
      ),
    },
    {
      path:"/search",
      element:(
        <Layout>
          <SearchPage/>
        </Layout>
      )
    },
    {
      path:`${links.Allsongs}/:filter`,
      element:(
        <Layout>
          <Genres/>
        </Layout>
      )
    },
    {
      path:links.searchSong,
      element:(
        <Layout>
          <SearchedSongs/>
        </Layout>
      )
    },

  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
