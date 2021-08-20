import {
    SET_ALBUMS,
    ADD_ALBUMS
  } from '../utils/constants';
  
  export const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    albums
  });
  
  export const addAlbums = (albums) => ({
    type: ADD_ALBUMS,
    albums
  });

  