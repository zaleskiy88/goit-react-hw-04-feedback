import React from 'react';
import PropTypes from 'prop-types';

import { FeedbackContainer, Button } from './Feedback.styled';
import { capitalizeFirstLowercaseRest } from 'utils/capitalizeFirstLowercaseRest';

export const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackContainer>
      <Button
        name="good"
        onClick={() => onLeaveFeedback({ type: 'good', payload: 1 })}
      >
        {capitalizeFirstLowercaseRest(options[0])}
      </Button>
      <Button
        name="neutral"
        onClick={() => onLeaveFeedback({ type: 'neutral', payload: 1 })}
      >
        {capitalizeFirstLowercaseRest(options[1])}
      </Button>
      <Button
        name="bad"
        onClick={() => onLeaveFeedback({ type: 'bad', payload: 1 })}
      >
        {capitalizeFirstLowercaseRest(options[2])}
      </Button>
    </FeedbackContainer>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
