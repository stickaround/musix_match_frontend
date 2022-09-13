import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { Album } from '../../types/index';

type AlbumCardPropTypes = {
  album: Album;
};

function AlbumCard({ album: { album } }: AlbumCardPropTypes) {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5' sx={{ height: '80px' }}>
          {album.album_name}
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Artist Name: <strong>{album.artist_name}</strong>
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Album Rating: <strong>{album.album_rating}</strong>
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Album Label: <strong>{album.album_label}</strong>
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Restricted: <strong>{album.restricted ? 'Yes' : 'No'}</strong>
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Release Date:{' '}
          <strong>
            {moment(album.album_release_date).format('MM/DD/YYYY')}
          </strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/tracks?album_id=${album.album_id}`}
          style={{ textDecoration: 'none' }}
        >
          <Button size='small'>See Tracks</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export { AlbumCard };
