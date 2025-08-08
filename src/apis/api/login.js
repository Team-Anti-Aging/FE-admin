import { instance } from '../utils/instance';

export const postLogin = async (data) => {
  const res = await instance.post('/dj/login', data);
  return res.data;
};

export const postLogout = async () => {
  const res = await instance.post('/dj/logout');
  return res.data;
};
