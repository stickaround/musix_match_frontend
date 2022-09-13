import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toast';

import { login, register } from '../../services/api';
import { RootState } from '../../store';
import { LoginPayload, RegisterPayload } from '../../types';
import { AuthState } from '../../types';
import { MSGs } from '../../constants';

const initialState: AuthState = {
  me: null,
  loading: false,
};

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ username, password }: LoginPayload) => {
    const {
      data: { user, token },
    } = await login({ username, password });
    return { user, token };
  }
);

export const registerAsync = createAsyncThunk(
  'auth/register',
  async ({ username, password, country }: RegisterPayload) => {
    const {
      data: { user, token },
    } = await register({ username, country, password });
    return { user, token };
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.me = {
          _id: action.payload.user._id,
          username: action.payload.user.username,
          country: action.payload.user?.country,
        };
        window.localStorage.setItem('token', action.payload.token);
        toast.success(MSGs.LOGIN_SUCCESS);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.me = null;
        toast.error(MSGs.LOGIN_FAILED);
      })
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.me = {
          _id: action.payload.user._id ?? '',
          username: action.payload.user.username ?? '',
          country: action.payload.user.country ?? '',
        };
        toast.success(MSGs.REGISTER_SUCCESS);
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.me = null;
        toast.error(MSGs.REGISTER_FAILED);
      });
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectMe = (state: RootState) => state.auth.me;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
