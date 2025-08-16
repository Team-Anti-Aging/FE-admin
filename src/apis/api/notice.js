import { instance } from '../utils/instance';

export const getNotice = async (walkTrailName) => {
  const res = await instance.get(`/admin_func/current/${walkTrailName}`);
  const notices = res.data;
  return notices;
};
