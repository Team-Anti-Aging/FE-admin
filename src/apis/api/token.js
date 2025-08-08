import { instance } from '../utils/instance';

export const postRefresh = async (refresh) => {
  const res = await instance.post('/dj/token/refresh', refresh);
  return res.data;
};
