import { instance } from '../utils/instance';

export const postLogin = (info) => {
  return instance.post('/accounts/login', info);
};

export const postLogout = () => {
  return instance.post('/accounts/logout', {});
};
