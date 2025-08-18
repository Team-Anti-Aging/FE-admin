import { instance } from '../utils/instance';

// 산책로 피드백 리스트
export const getFeedbacks = async (walktrail_name) => {
  const { data } = await instance.get(`/admin_func/feedback/${walktrail_name}`);
  console.log('피드백', data);
  return data;
};

// 피드백 디테일 정보
export const getFeedbackDetail = async (id) => {
  const { data } = await instance.get(`/feedback/${id}`);
  const { walktrail, location, category, feedback_content, feedback_image_url } = data;
  return { walktrail, location, category, feedback_content, feedback_image_url };
};

// 관리자 피드백 처리
export const postAdminFeedback = async (id, info) => {
  const res = await instance.post(`/admin_func/create/${id}`, info);
  return res;
};
