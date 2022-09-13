import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { Artist } from '../../types/index';

type ArtistCardPropTypes = {
  artist: Artist;
};

function ArtistCard({ artist: { artist } }: ArtistCardPropTypes) {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>{artist.artist_name}</Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Artist Rating: <strong>{artist.artist_rating}</strong>
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Twitter url:{' '}
          <strong>{artist.artist_twitter_url || 'No twitter url'}</strong>
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Artist comment:{' '}
          <strong>{artist.artist_comment || 'No comment'}</strong>
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Restricted: <strong>{artist.restricted ? 'Yes' : 'No'}</strong>
        </Typography>
        <Typography sx={{ mt: 1.5 }} color='text.secondary'>
          Updated at:{' '}
          <strong>{moment(artist.updated_time).format('MM/DD/YYYY')}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/albums?artist_id=${artist.artist_id}`}
          style={{ textDecoration: 'none' }}
        >
          <Button size='small'>See Albums</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export { ArtistCard };
