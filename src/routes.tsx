import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toast';

import { Layout } from './core/components/Layout';
import { Home } from './pages/home';
import { Login } from './pages/auth/login';
import { Register } from './pages/auth/register';
import { Artist } from './pages/artist';
import { Album } from './pages/album';

function PostRoutes() {
  return (
    <BrowserRouter>
      <Layout mode='guest'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/artists' element={<Artist />} />
          <Route path='/albums' element={<Album />} />
        </Routes>
        <ToastContainer position='top-right' delay={2000} />
      </Layout>
    </BrowserRouter>
  );
}

export { PostRoutes as Routes };
