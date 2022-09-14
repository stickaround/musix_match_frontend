import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grid, Box, CircularProgress } from '@mui/material';

import { TrackCard } from './TrackCard';
import { getTracksAsync, selectTracks, selectTrackLoading } from './trackSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';

function Track() {
  const dispatch = useAppDispatch();
  const search = useLocation().search;
  const tracks = useAppSelector(selectTracks);
  const loading = useAppSelector(selectTrackLoading);

  React.useEffect(() => {
    const album_id = new URLSearchParams(search).get('album_id');
    dispatch(getTracksAsync(album_id ?? ''));
  }, [dispatch, search]);

  return loading ? (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Container sx={{ mt: '40px' }}>
      <h2>Top 3 tracks of {tracks.length ? tracks[0].track.album_name : ''}</h2>
      <Box>
        <Grid container spacing={1} sx={{ mt: '40px' }}>
          {tracks.length
            ? tracks.map((track) => (
                <Grid item xs={4} key={track.track.track_id}>
                  <TrackCard track={track} />
                </Grid>
              ))
            : 'No tracks'}
        </Grid>
      </Box>
    </Container>
  );
}

export { Track };
