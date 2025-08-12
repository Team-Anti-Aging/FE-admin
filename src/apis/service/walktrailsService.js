import * as walktrails from '../api/walktrails';

// TODO더미
export const getWalkTrilsService = async (walkTrailName) => {
  try {
    const res = await walktrails.getWalkTrails(walkTrailName);
    const { name, routes } = res.data;
    return { name, routes };
  } catch (e) {
    console.error(e);
  }
};

//산책로 이름 - 미처리 정보
export const getWalkTrailsInfoService = async () => {
  try {
    const res = await walktrails.getWalkTrailsInfo();
    const { name, unresolved_count } = res.data;
    return { name, unresolved_count };
  } catch (e) {
    console.error(e);
  }
};

// 산책로 경로 그리기
export const getRouteService = async (walkTrailName) => {
  try {
    const res = await walktrails.getRoute(walkTrailName);
    const { name, routes } = res.data;
    return { name, routes };
  } catch (e) {
    console.error(e);
  }
};
