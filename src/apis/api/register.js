import { instance } from '../utils/instance';

export const postRegistration = async (data) => {
  const res = await instance.post('/dj/registration', data);
  return res.data;
};
