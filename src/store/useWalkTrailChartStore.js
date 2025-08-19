import { create } from 'zustand';

export const useWalkTrailChartStore = create((set) => {
  return {
    walkTrailChart: [],
    setWalkTrailChart: (value) => set({ walkTrailChart: value }),
  };
});
