import { instance } from '../utils/instance';

// 산책로 피드백 리스트
export const getFeedbacks = async (walktrail_name) => {
  const { data } = await instance.get(`/admin_func/feedback/${walktrail_name}`);
  return data;
};

// 피드백 디테일 정보
export const getFeedbackDetail = async (Fid) => {
  const { data } = await instance.get(`/feedback/${Fid}/`);
  console.log('피드백 디테일', data);
  const { id, walktrail, location, category, feedback_content, feedback_image_url, created_at } = data;

  const date = new Date(created_at);
  const created_at_parse = date
    .toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    .replace(/\.\s/g, ' ')
    .replace(/^(\d{2}) (\d{2}) (\d{2})/, '$1년 $2월 $3일')
    .replace(/(\d+):(\d+)/, '$1시 $2분');
  return { id, walktrail, location, category, feedback_content, feedback_image_url, created_at_parse };
};

// 관리자 피드백 처리
export const postAdminFeedback = async (id, info) => {
  const res = await instance.post(`/admin_func/create/${id}`, info);
  return res;
};
