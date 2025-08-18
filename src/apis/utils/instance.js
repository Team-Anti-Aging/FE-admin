import axios from 'axios';
import { getCookie } from './cookie';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
});

// 요청마다 최신 access 토큰 첨부
instance.interceptors.request.use((config) => {
  const token = getCookie('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } // 첫 로그인 요청 시에는 첨부 안 함.
  return config;
});
