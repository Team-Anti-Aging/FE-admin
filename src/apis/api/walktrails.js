import { instance } from '../utils/instance';

// 더미
export const getWalkTrails = () => {
  return instance.get('/walktrails.json');
};

//산책로 이름 - 미처리 정보
export const getWalkTrailsInfo = () => {
  return instance.get('/admin_func/notice');
};

// 산책로 경로 그리기
export const getRoute = (walkTrailName) => {
  return instance.get(`/admin_func/route/${walkTrailName}`);
};
