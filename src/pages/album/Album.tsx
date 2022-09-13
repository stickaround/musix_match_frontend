import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grid, Box } from '@mui/material';

import { AlbumCard } from './AlbumCard';
import { getAlbumsAsync, selectAlbums } from './albumSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';

function Album() {
  const dispatch = useAppDispatch();
  const albums = useAppSelector(selectAlbums);
  const search = useLocation().search;

  React.useEffect(() => {
    const artist_id = new URLSearchParams(search).get('artist_id');
    dispatch(getAlbumsAsync(artist_id ?? ''));
  }, [dispatch, search]);

  return (
    <Container sx={{ mt: '40px' }}>
      <h2>
        Latest 3 albums of {albums.length ? albums[0].album.artist_name : ''}
      </h2>
      <Box>
        <Grid container spacing={1} sx={{ mt: '40px' }}>
          {albums.length
            ? albums.map((album) => (
                <Grid item xs={4} key={album.album.album_id}>
                  <AlbumCard album={album} />
                </Grid>
              ))
            : 'No albums'}
        </Grid>
      </Box>
    </Container>
  );
}

export { Album };
