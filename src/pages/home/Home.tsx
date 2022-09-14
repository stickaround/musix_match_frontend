import { Typography } from '@mui/material';

function Home() {
  return (
    <div className='App'>
      <Typography
        variant='h2'
        sx={{ textAlign: 'center', color: 'text.secondary', mt: '50px' }}
      >
        Welcome to Musix Match API consuming site!
      </Typography>
    </div>
  );
}

export { Home };
