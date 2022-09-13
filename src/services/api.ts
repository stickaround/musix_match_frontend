import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
  Artist,
} from '../types';

const api = axios.create({
  baseURL: process.env.API_URL ?? 'http://localhost:3000/api/v1',
});

api.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${
        window ? window.localStorage.getItem('token') : ''
      }`,
    };
    return config;
  }
);

export const login = (payload: LoginPayload) =>
  api.post<LoginPayload, AxiosResponse<LoginResponse>>('/auth/login', payload);

export const register = (payload: RegisterPayload) =>
  api.post<RegisterPayload, AxiosResponse<RegisterResponse>>(
    '/auth/register',
    payload
  );

export const getArtists = () => api.get<Artist[]>('/artists/');
