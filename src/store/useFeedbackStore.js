import { create } from 'zustand';

export const useFeedbackStore = create((set) => {
  return {
    feedbacks: [],
    setFeedback: (feadbacks) => set({ feadbacks }),
    feedbackDetail: {},
    setFeedbackDetail: (feedbackDetail) => set({ feedbackDetail }),
  };
});
