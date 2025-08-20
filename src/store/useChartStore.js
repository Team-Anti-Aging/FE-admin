import { create } from 'zustand';

export const useChartStore = create((set) => {
  return {
    walkTrailChart: [],
    setWalkTrailChart: (value) => set({ walkTrailChart: value }),
    NoticeChart: [],
    setNoticeChart: (value) => set({ NoticeChart: value }),
  };
});
