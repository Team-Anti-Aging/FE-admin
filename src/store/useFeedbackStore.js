import { create } from 'zustand';

export const useFeedbackStore = create((set) => {
  return {
    feedback: {},
    setFeedback: (feedback) => set({ feedback }),
  };
});
