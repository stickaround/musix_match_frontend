import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toast';
import { Box, CircularProgress } from '@mui/material';

import { Layout } from './core/components/Layout';
import { Home } from './pages/home';
import { Login } from './pages/auth/login';
import { Register } from './pages/auth/register';
import { Artist } from './pages/artist';
import { Album } from './pages/album';
import { Track } from './pages/track';

import { getCurrentUserAsync, selectCurrentUser } from './pages/auth/authSlice';
import { useAppDispatch, useAppSelector } from './store/hook';

function Loader() {
  return (
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
  );
}

function PostRoutes() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const [userFetched, setUserFetched] = React.useState(false);

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      dispatch(getCurrentUserAsync()).then(() => {
        setUserFetched(true);
      });
    } else {
      setUserFetched(true);
    }
  }, [dispatch]);

  const guestRoutes = (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
        <ToastContainer position='top-right' delay={2000} />
      </Layout>
    </BrowserRouter>
  );

  const userRoutes = (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artists' element={<Artist />} />
          <Route path='/albums' element={<Album />} />
          <Route path='/tracks' element={<Track />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <ToastContainer position='top-right' delay={2000} />
      </Layout>
    </BrowserRouter>
  );

  return userFetched ? currentUser ? userRoutes : guestRoutes : <Loader />;
}

export { PostRoutes as Routes };
