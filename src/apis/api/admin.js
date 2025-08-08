import { instance } from '../utils/instance';

export const postAdminFeedback = async (id, data) => {
  const res = await instance.post(`/admin_func/create/${id}`, data);
  return res.data;
};
