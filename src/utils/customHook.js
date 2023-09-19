import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getAlbums,
  isLoader_Action,
  setError,
} from "../App/features/albumSlice";
import { setUser, setSavedSongs } from "../App/features/userSlice";
import { setLoginError } from "../App/features/selectedAlbumSlice";

export const config = {
  headers: {
    projectId: "bmc60xnvc646",
  },
};

export const AUTH_URL = "https://academics.newtonschool.co/api/v1/user/login";
export const SONG_URL =
  "https://academics.newtonschool.co/api/v1/music/song?page=1&limit=100";
export const ALBUM_URL = "https://academics.newtonschool.co/api/v1/music/album";
export const ALL_ARTISTS_URL =
  "https://academics.newtonschool.co/api/v1/music/artist/";

export const SEARCH_URL =
  "https://academics.newtonschool.co/api/v1/music/song?filter=";

export default function useAlbums() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoader_Action());
    axios
      .get(SONG_URL, config)
      .then((res) => {
        dispatch(getAlbums({ albums: res.data.data }));
      })
      .catch((err) => {
        dispatch(setError());
        console.error(err);
      });
  }, []);
}

export function useUserDetails() {
  const dispatch = useDispatch();
  const { savedSongs, user } = useSelector((state) => state.user);
  const savedUserSongs = JSON.parse(localStorage.getItem("songs")) || [];
  const userSavedDetails =
    JSON.parse(localStorage.getItem("userDetails")) || {};

  useEffect(() => {
    if (userSavedDetails.token) {
      dispatch(setUser({ userDetails: userSavedDetails }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(user));
    localStorage.setItem("songs", JSON.stringify(savedSongs));
  }, [user, savedSongs]);
}

export function shareOnTwitter(title, pageUrl) {
  let twitterUrl = `https://twitter.com/intent/tweet?text=`;
  let text = `Check out the ${title}
                ${pageUrl}`;
  window.open(`${twitterUrl}${text}`, "_blank");
}

export function shareOnFacebook(title, pageUrl) {
  let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=`;
  let text = `Check out the ${title}
                ${pageUrl}`;
  window.open(`${facebookUrl}${text}`, "_blank");
}

export function copyToClipboard(data) {
  navigator.clipboard.writeText(data);
}
