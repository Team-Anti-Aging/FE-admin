import { instance } from '../utils/instance';

export const postRefresh = (refresh) => {
  return instance.post('/accounts/token/refresh', { refresh });
};
