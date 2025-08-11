import { instance } from '../utils/instance';

export const getNotice = (walkTrailName) => {
  return instance.get(`/admin_func/current/${walkTrailName}`);
};
