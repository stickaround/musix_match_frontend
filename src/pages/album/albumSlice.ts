import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAlbums } from '../../services/api';
import { AlbumState } from '../../types';
import { RootState } from '../../store';

const initialState: AlbumState = {
  albums: [],
  loading: true,
};

export const getAlbumsAsync = createAsyncThunk(
  'artist/get_albums',
  async (artist_id: number | string) => {
    const { data: albums } = await getAlbums(artist_id);
    return { albums };
  }
);

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAlbumsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAlbumsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.albums = [...action.payload.albums];
      })
      .addCase(getAlbumsAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const albumActions = albumSlice.actions;

export const selectAlbumLoading = (state: RootState) => state.album.loading;
export const selectAlbums = (state: RootState) => state.album.albums;

const albumReducer = albumSlice.reducer;
export default albumReducer;
