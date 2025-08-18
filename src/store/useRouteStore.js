import { create } from 'zustand';

export const useRouteStore = create((set) => {
  return {
    routes: [],
    setRoutes: (routes) => set({ routes }),
  };
});
