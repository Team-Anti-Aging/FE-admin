import { create } from 'zustand';

export const usePanelStore = create((set) => {
  return {
    isOpen: false,
    openType: 'admin', // feedback or admin
    pushFeedback: () => set(() => ({ openType: 'feedback', isOpen: true })),
    pushToggle: () => set((state) => ({ openType: 'admin', isOpen: !state.isOpen })),
  };
});
