import { create } from 'zustand';

export const useFeedbackStore = create((set) => {
  return {
    feedbacks: [],
    setFeedback: (feedbacks) => set({ feedbacks }),
    feedbackDetail: {},
    setFeedbackDetail: (feedbackDetail) => set({ feedbackDetail }),
    redData: [],
    setRedData: (redData) => set({ redData }),
    blueData: [],
    setBlueData: (blueData) => set({ blueData }),
    categoryFeedbacks: [],
    setCategoryFeedbacks: (categoryFeedbacks) => set({ categoryFeedbacks }),
  };
});
