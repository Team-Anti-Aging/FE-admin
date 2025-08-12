import { create } from 'zustand';

export const useRouteStore = create((set) => {
  return {
    routes: [],
    setRoutes: (routes) => set({ routes }),
    trailName: '홍릉두물길',
    setTrailName: (trailName) => set({ trailName }),
    feedbacks: [],
    setFeedbacks: (feedbacks) => set({ feedbacks }),
  };
});
