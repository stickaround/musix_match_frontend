import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toast';

import { Layout } from './core/components/Layout';
import { Home } from './pages/home';
import { Login } from './pages/auth/login';
import { Register } from './pages/auth/register';

function PostRoutes() {
  return (
    <BrowserRouter>
      <Layout mode='guest'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <ToastContainer position='top-right' delay={2000} />
      </Layout>
    </BrowserRouter>
  );
}

export { PostRoutes as Routes };
