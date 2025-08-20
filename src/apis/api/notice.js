import { instance } from '../utils/instance';

export const getNotices = async () => {
  const { data } = await instance.get('admin_func/recent/');

  const NoticeList = (data || [])?.map((d) => ({
    name: d.name === '배봉두매十里(십리)길' ? '배봉두매십리길' : d.name,
    제안: d.suggestion_count,
    불편: d.inconvenience_count,
  }));

  return NoticeList;
};

export const getNoticesWalkTrail = async (walktrail_name) => {
  const { data } = await instance.get(`admin_func/recent/${walktrail_name}`);
  data.forEach((f) => {
    //2025-08-19T13:17:51.928090+09:00
    const [h, m] = f.created_at.split('T')[1].split(':').slice(0, 2);
    f.created_at = [h, m];

    switch (f.walktrail) {
      case 1:
        return (f.walktrail = '홍릉두물길');
      case 2:
        return (f.walktrail = '청량가로수길');
      case 3:
        return (f.walktrail = '장안벚꽃안길');
      case 4:
        return (f.walktrail = '배봉두매十里(십리)길');
      case 5:
        return (f.walktrail = '천장산하늘길');
      default:
        return null;
    }
  });

  return data;
};

export const getNoticesWalkTrailFeedback = async (walktrail_name, id) => {
  const { data } = await instance.get(`admin_func/recent/${walktrail_name}/${id}`);
  return data;
};
