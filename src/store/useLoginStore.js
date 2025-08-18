import { create } from 'zustand';

export const useLoginStore = create((set) => {
  return {
    isLogin: false,
    setLogin: () => {
      set({ isLogin: true });
    },
    setLogout: () => {
      set({ isLogin: false });
    },
  };
});
