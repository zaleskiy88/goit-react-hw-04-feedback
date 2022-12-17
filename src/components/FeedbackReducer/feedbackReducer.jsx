export const feedbackReducer = (state, action) => {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + action.payload };

    case 'neutral':
      return { ...state, neutral: state.neutral + action.payload };

    case 'bad':
      return { ...state, bad: state.bad + action.payload };

    case 'total':
      return { ...state, total: state.good + state.neutral + state.bad };

    case 'positive':
      return {
        ...state,
        positive: Math.floor(
          ((state.good + state.neutral) * 100) /
            (state.good + state.neutral + state.bad)
        ),
      };

    default:
      return state;
  }
};
