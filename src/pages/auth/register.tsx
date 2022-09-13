import {
  Container,
  Card,
  CardContent,
  FormControl,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { registerAsync } from './authSlice';
import { useAppDispatch } from '../../store/hook';

function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const credentials = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Input username!'),
      password: Yup.string().required('Input password!'),
    }),
    onSubmit: (values) => {
      dispatch(registerAsync({ ...values, country: 'au' }));
    },
  });
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: 500, m: '100px' }}>
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{ textAlign: 'center' }}
          >
            REGISTER
          </Typography>
          <Box component='form' onSubmit={credentials.handleSubmit}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id='username'
                label='Username'
                name='username'
                variant='standard'
                error={
                  !!credentials.errors.username && credentials.touched.username
                }
                helperText={
                  credentials.touched.username && credentials.errors.username
                }
                onChange={credentials.handleChange}
                value={credentials.values.username}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id='password'
                label='Password'
                variant='standard'
                name='password'
                type='password'
                error={
                  !!credentials.errors.password && credentials.touched.password
                }
                helperText={
                  credentials.touched.password && credentials.errors.password
                }
                onChange={credentials.handleChange}
                value={credentials.values.password}
              />
            </FormControl>
            <Box
              component='div'
              sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
            >
              <Button
                size='small'
                color='primary'
                variant='contained'
                type='submit'
                sx={{ mr: 1 }}
              >
                Register
              </Button>
              <Link to='/login' style={{ textDecoration: 'none' }}>
                <Button size='small' color='info' variant='contained'>
                  Login
                </Button>
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export { Register };
