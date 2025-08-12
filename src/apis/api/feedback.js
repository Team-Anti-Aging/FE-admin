import { instance } from '../utils/instance';

// TODO더미
export const getFeedbackDummy = (walktrail_name) => {
  return instance.get(`/feedback/${walktrail_name}.json`);
};

// 산책로 피드백 리스트
export const getFeedbacks = (walktrail_name) => {
  return instance.get(`/admin_func/feedback/${walktrail_name}`);
};

// 피드백 디테일 정보
export const getFeedbackDetail = (id) => {
  return instance.get(`/feedback/${id}`);
};

// 관리자 피드백 처리
export const postAdminFeedback = (id, info) => {
  return instance.post(`/admin_func/create/${id}`, info);
};
