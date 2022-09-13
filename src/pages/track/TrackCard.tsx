import { Card, CardContent, Typography } from '@mui/material';
import moment from 'moment';

import { Track } from '../../types/index';

type TrackCardPropTypes = {
  track: Track;
};

function TrackCard({ track: { track } }: TrackCardPropTypes) {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>{track.track_name}</Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Track Rating: <strong>{track.track_rating}</strong>
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Album Name: <strong>{track.album_name}</strong>
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Artist Name: <strong>{track.artist_name}</strong>
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          Restricted: <strong>{track.restricted ? 'Yes' : 'No'}</strong>
        </Typography>
        <Typography sx={{ mt: 1.5 }} color='text.secondary'>
          Updated at:{' '}
          <strong>{moment(track.updated_time).format('MM/DD/YYYY')}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}

export { TrackCard };
