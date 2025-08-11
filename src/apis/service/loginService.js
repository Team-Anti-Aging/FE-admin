import * as login from '../api/login';

export const postLoginService = async (info) => {
  try {
    const res = await login.postLogin(info);
    const {
      access,
      refresh,
      user: { username, nickname },
    } = res.data;

    return { access, refresh, username, nickname };
  } catch (e) {
    console.error(e);
  }
};

export const postLogoutService = async () => {
  try {
    const res = await login.postLogout();
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
