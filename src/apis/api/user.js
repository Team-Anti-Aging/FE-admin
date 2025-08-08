import { instance } from '../utils/instance';

export const getUser = async () => {
  const res = await instance.get('/dj/user');
  return res.data;
};
