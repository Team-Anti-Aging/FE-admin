import { instance } from '../utils/instance';

export const postRegistration = async (info) => {
  const { data } = await instance.post('/accounts/registration', info);
  return data;
};
