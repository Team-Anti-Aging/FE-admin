import { instance } from '../utils/instance';

//산책로 이름 - 미처리 정보
export const getWalkTrailsInfo = async () => {
  const { data } = await instance.get('/admin_func/notice');
  console.log(data);
  return data;
};

// 산책로 경로 그리기
export const getRoute = async (walkTrailName) => {
  const { data } = await instance.get(`/admin_func/route/${walkTrailName}`);

  const { routes } = data;
  console.log(routes);
  return routes;
};
