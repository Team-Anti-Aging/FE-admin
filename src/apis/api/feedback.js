import { instance } from '../utils/instance';

// 산책로 피드백 리스트
export const getFeedbacks = async (walktrail_name) => {
  const { data } = await instance.get(`/admin_func/feedback/${walktrail_name}`);
  return data;
};

// 피드백 디테일 정보
export const getFeedbackDetail = async (Fid) => {
  const { data } = await instance.get(`/feedback/${Fid}/`);
  let { id, walktrail, location, category, feedback_content, feedback_image_url, created_at } = data;

  switch (walktrail) {
    case 1:
      walktrail = '홍릉두물길';
      break;
    case 2:
      walktrail = '청량가로수길';
      break;

    case 3:
      walktrail = '장안벚꽃안길';
      break;

    case 4:
      walktrail = '배봉두매十里(십리)길';
      break;

    case 5:
      walktrail = '천장산하늘길';
      break;
    default:
      break;
  }

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
export const postAdminFeedback = async (id, formData) => {
  const res = await instance.post(`/admin_func/create/${id}/`, formData);
  return res;
};

export const getResponded = async (walktrail_name) => {
  const { data } = await instance.get(`/admin_func/responded/${walktrail_name}/`);
  return data;
};
