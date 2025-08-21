import axios from 'axios';
import { getCookie } from './cookie';
import { tokenRefresh } from './tokenRefresh';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');

    //토큰 헤더에 추가
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

//응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      await tokenRefresh(); // 재발급 요청
      const accessToken = getCookie('accessToken');
      error.config.headers.Authorization = `Bearer ${accessToken}`;
      return instance(error.config);
    } else if (error.response?.status === 404) {
      window.location.href = '/notFound';
      return Promise.reject(error);
    } else if (error.response?.status === 403) {
      window.location.href = '/forbidden';
      return Promise.reject(error);
    } else if (error.response?.status === 500) {
      window.location.href = '/serverError';
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
