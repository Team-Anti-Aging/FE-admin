import * as feedback from '../api/feedback';

//TODO더미
export const getFeedbackDummyService = async (walktrail_name) => {
  try {
    const res = await feedback.getFeedbackDummy(walktrail_name);
    const data = res.data;
    return data;
  } catch (e) {
    console.error(e);
  }
};

// 산책로 피드백 리스트
export const getFeedbacksService = async (walktrail_name) => {
  try {
    const res = await feedback.getFeedbacks(walktrail_name);
    return res; //TODO 스웨거 완성되면 마킹에 어떤 정보 필요한지 정제
  } catch (e) {
    console.error(e);
  }
};

//피드백 디테일 정보
export const getFeedbackDetailService = async (id) => {
  try {
    // TODO 리액트 쿼리 쓸 거면 에러 처리는 지우자
    const res = await feedback.getFeedbackDetail(id);
    const { walktrail, location, category, feedback_content, feedback_image_url } = res.data;
    return { walktrail, location, category, feedback_content, feedback_image_url };
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//관리자 피드백 처리
export const postAdminFeedbackService = async (id, info) => {
  try {
    const res = await feedback.postAdminFeedback(id, info);
    return res;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
