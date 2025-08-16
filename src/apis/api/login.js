import { instance } from '../utils/instance';

export const postLogin = async (info) => {
  const { data } = await instance.post('/accounts/login', info);
  const { access, refresh } = data;
  return { access, refresh };
};

export const postLogout = async () => {
  const { data } = await instance.post('/accounts/logout');
  return data;
};
