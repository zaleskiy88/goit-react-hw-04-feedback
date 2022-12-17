import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

export * from 'components/ui/AppContainer.styled';
export * from 'components/Feedback/Feedback';
export * from 'components/Feedback/Feedback.styled';
export * from 'components/Statistics/Statistics';
export * from 'utils/capitalizeFirstLowercaseRest';
export * from 'components/ui/Section';
export * from 'components/Notification/Notification';
export * from 'components/FeedbackReducer/feedbackReducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
