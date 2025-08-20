import { getCookie, setCookie } from './cookie';
import axios from 'axios';

//토큰 리프레시 함수
export const tokenRefresh = async () => {
  const refreshToken = getCookie('refreshToken');
  const tmp = {
    refresh: refreshToken,
  };

  const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/accounts/token/refresh/`, tmp);

  const newAccessToken = data.access;
  setCookie('accessToken', newAccessToken, { path: '/', secure: true });
};
