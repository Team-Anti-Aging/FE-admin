import * as token from '../api/token';

export const postRefreshService = async (refresh) => {
  try {
    const res = await token.postRefresh(refresh);
    const { access } = res.data;
    return access;
  } catch (e) {
    console.error(e);
  }
};
