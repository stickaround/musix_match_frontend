import * as React from 'react';
import { Container, Grid, Box } from '@mui/material';

import { ArtistCard } from './ArtistCard';
import { getArtistsAsync, selectArtists } from './artistSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';

function Artist() {
  const dispatch = useAppDispatch();
  const artists = useAppSelector(selectArtists);

  React.useEffect(() => {
    dispatch(getArtistsAsync());
  }, []);

  return (
    <Container sx={{ mt: '40px' }}>
      <h2>Top charting artists in your country</h2>
      <Box>
        <Grid container spacing={1} sx={{ mt: '40px' }}>
          {artists.length
            ? artists.map((artist) => (
                <Grid item xs={4} key={artist.artist.artist_id}>
                  <ArtistCard artist={artist} />
                </Grid>
              ))
            : 'No artists'}
        </Grid>
      </Box>
    </Container>
  );
}

export { Artist };
