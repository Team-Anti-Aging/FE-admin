import { instance } from '../utils/instance';

export const getWalkTrails = async () => {
  const res = await instance.get('/walktrails.json');
  return res.data;
};
