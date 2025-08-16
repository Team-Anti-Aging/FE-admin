import { create } from 'zustand';

export const useLoginStore = create((set) => {
  const token = localStorage.getItem('accessToken'); // 없으면 자동으로 null
  return {
    isLogin: !!token,
    accessToken: token,
    setLogin: (token) => {
      localStorage.setItem('accessToken', token);
      set({ isLogin: true, accessToken: token });
    },
    setLogout: () => {
      localStorage.removeItem('accessToken');
      set({ isLogin: false, accessToken: null });
    },
  };
});
