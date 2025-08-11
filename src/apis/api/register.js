import { instance } from '../utils/instance';

export const postRegistration = (info) => {
  return instance.post('/accounts/registration', info);
};
