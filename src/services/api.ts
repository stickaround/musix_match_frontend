import axios, { AxiosResponse } from 'axios';

import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from '../types';

const api = axios.create({
  baseURL: process.env.API_URL ?? 'http://localhost:3000/api/v1',
});

export const login = (payload: LoginPayload) =>
  api.post<LoginPayload, AxiosResponse<LoginResponse>>('/auth/login', payload);

export const register = (payload: RegisterPayload) =>
  api.post<RegisterPayload, AxiosResponse<RegisterResponse>>(
    '/auth/register',
    payload
  );
