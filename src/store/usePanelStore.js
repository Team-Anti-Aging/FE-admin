import { create } from 'zustand';

export const usePanelStore = create((set) => {
  return {
    isOpen: false,
    PanelType: null, // 산책로 현황, 금일 신고 내역, AI 보고서, feedback
    openPanel: (type) => set({ isOpen: true, PanelType: type }),
    closePanel: () => set({ isOpen: false, PanelType: null }),
  };
});
