import {
  Container,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Box,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { registerAsync } from './authSlice';
import { useAppDispatch } from '../../store/hook';
import { countries } from './countries';

function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const credentials = useFormik({
    initialValues: {
      username: '',
      password: '',
      country: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Input username!'),
      password: Yup.string().required('Input password!'),
      country: Yup.string().required('Input country!'),
    }),
    onSubmit: (values) => {
      dispatch(registerAsync({ ...values }))
        .unwrap()
        .then(() => {
          navigate('/artists');
        });
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
            <FormControl
              variant='standard'
              fullWidth
              sx={{ m: 1, minWidth: 120 }}
              error={
                !!credentials.errors.country && credentials.touched.username
              }
            >
              <InputLabel id='country-select-label'>Country</InputLabel>
              <Select
                labelId='country-select-label'
                id='country-select'
                name='country'
                value={credentials.values.country}
                onChange={credentials.handleChange}
              >
                {countries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {credentials.touched.username && credentials.errors.country}
              </FormHelperText>
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
