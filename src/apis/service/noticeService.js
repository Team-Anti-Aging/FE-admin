import * as notice from '../api/notice';

export const getNoticeService = async (walkTrailName) => {
  try {
    const res = await notice.getNotice(walkTrailName);
    const notices = res.data;
    return notices;
  } catch (e) {
    console.error(e);
  }
};
