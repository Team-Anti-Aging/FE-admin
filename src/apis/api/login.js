import { instance } from '../utils/instance';

export const postLogin = async (info) => {
  const { data } = await instance.post('/accounts/login/', info);
  return data; //  { access, refresh }
};

export const postLogout = async (refresh) => {
  const { data } = await instance.post('/accounts/logout/', refresh);
  return data;
};
