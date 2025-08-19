import { instance } from '../utils/instance';

//산책로 이름 - 미처리 정보
export const getWalkTrailsInfo = async () => {
  const { data } = await instance.get('/admin_func/notice');
  return data;
};

// 산책로 경로 그리기
export const getRoute = async (walkTrailName) => {
  const { data } = await instance.get(`/admin_func/route/${walkTrailName}`);

  const { routes } = data;
  return routes;
};

// 산책로 막대 그래프 정보
export const getWalkTrailsChart = async () => {
  const { data } = await instance.get('/admin_func/routefeedback/');
  const new_data = (data || []).map((d) => ({
    name: d.name === '배봉두매十里(십리)길' ? '배봉두매십리길' : d.name,
    제안: d.suggestion_count,
    불편: d.inconvenience_count,
  }));
  return new_data;
};
