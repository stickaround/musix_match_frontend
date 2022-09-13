import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getArtists } from '../../services/api';
import { ArtistState } from '../../types';
import { RootState } from '../../store';

const initialState: ArtistState = {
  artists: [],
  loading: true,
};

export const getArtistsAsync = createAsyncThunk(
  'artist/get_artists',
  async () => {
    const { data: artists } = await getArtists();
    return { artists };
  }
);

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArtistsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getArtistsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.artists = [...action.payload.artists];
      })
      .addCase(getArtistsAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const artistActions = artistSlice.actions;

export const selectArtistLoading = (state: RootState) => state.artist.loading;
export const selectArtists = (state: RootState) => state.artist.artists;

const artistReducer = artistSlice.reducer;
export default artistReducer;
