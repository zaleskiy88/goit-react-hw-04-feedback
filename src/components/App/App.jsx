import {
  Feedback,
  Statistics,
  AppContainer,
  Section,
  feedbackReducer,
} from 'index';
import { useReducer, useEffect } from 'react';

export const App = () => {
  const [feedBackOptions, dispatch] = useReducer(feedbackReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  });

  const { good, neutral, bad, total, positive } = feedBackOptions;
  const options = ['good', 'neutral', 'bad'];

  useEffect(() => {
    dispatch({ type: 'total' });
    dispatch({ type: 'positive' });
  }, [good, neutral, bad]);

  return (
    <AppContainer>
      <Section title="Pleaase leave your feedback">
        <Feedback options={options} onLeaveFeedback={dispatch} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positive}
        />
      </Section>
    </AppContainer>
  );
};
