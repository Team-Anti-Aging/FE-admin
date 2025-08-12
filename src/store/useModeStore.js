import { create } from 'zustand';

export const useModeStore = create((set) => {
  return {
    mode: '불편',
    toggle: () => set((state) => ({ mode: state.mode === '불편' ? '제안' : '불편' })),
  };
});
