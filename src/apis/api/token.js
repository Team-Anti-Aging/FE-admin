import { instance } from '../utils/instance';

export const postRefresh = async (refresh) => {
  const res = await instance.post('/accounts/token/refresh', { refresh });
  const { access } = res.data;
  return access;
};
