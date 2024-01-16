import React, { useState } from 'react';
import Statistics from '../components/Statistics/Statistics';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Section from '../components/Section/Section';
import Notification from '../components/Notification/Notification';
import styles from './App.module.css';
import '../index.css'

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const [showNotification, setShowNotification] = useState(true);

  const onLeaveFeedback = (type) => {
    setState((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }));
    setShowNotification(false);
  };

  return (
    <div className={styles.container}>
      <Section title="Leave Feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {state.good + state.neutral + state.bad > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={state.good + state.neutral + state.bad}
            positivePercentage={
              state.good > 0
                ? Math.round((state.good / (state.good + state.neutral + state.bad)) * 100)
                : 0
            }
          />
        ) : (
          showNotification && <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;

