import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getTracks } from '../../services/api';
import { TrackState } from '../../types';
import { RootState } from '../../store';

const initialState: TrackState = {
  tracks: [],
  loading: true,
};

export const getTracksAsync = createAsyncThunk(
  'artist/get_tracks',
  async (artist_id: number | string) => {
    const { data: tracks } = await getTracks(artist_id);
    return { tracks };
  }
);

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTracksAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTracksAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = [...action.payload.tracks];
      })
      .addCase(getTracksAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const trackActions = trackSlice.actions;

export const selectTrackLoading = (state: RootState) => state.track.loading;
export const selectTracks = (state: RootState) => state.track.tracks;

const trackReducer = trackSlice.reducer;
export default trackReducer;
