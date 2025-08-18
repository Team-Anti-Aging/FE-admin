import { instance } from '../utils/instance';

export const getNotices = async () => {
  const { data } = await instance.get('admin_func/recent/');
  return data;
};

export const getNoticesWalkTrail = async (walktrail_name) => {
  const { data } = await instance.get(`admin_func/recent/${walktrail_name}`);
  return data;
};

export const getNoticesWalkTrailFeedback = async (walktrail_name, id) => {
  const { data } = await instance.get(`admin_func/recent/${walktrail_name}/${id}`);
  return data;
};
