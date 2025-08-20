import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useLoginStore = create(
  persist(
    (set) => ({
      isLogin: false,
      login: () => set({ isLogin: true }),
      logout: () => set({ isLogin: false }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
