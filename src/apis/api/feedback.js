import { instance } from '../utils/instance';

export const getFeedbackList = async (walktrailname, type, status) => {
  const res = await instance.get(`/feedback/list/${walktrailname}/${type}/${status}`);
  return res.data;
};

export const getFeedbackDetail = async (id) => {
  const res = await instance.get(`/feedback/${id}`);
  return res.data;
};

export const postFeedback = async (data) => {
  const res = await instance.post('/feedback/upload', data);
  return res.data;
};
