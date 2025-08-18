import { create } from 'zustand';

export const useTrailNameStore = create((set) => {
  return {
    trailName: null,
    setTrailName: (trailName) => set({ trailName: trailName }),
  };
});
