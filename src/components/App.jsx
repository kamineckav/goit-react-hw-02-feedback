import React, { Component } from 'react';
import Statistics from '../components/Statistics/Statistics';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Section from '../components/Section/Section';
import Notification from '../components/Notification/Notification';
import styles from './App.module.css';
import '../index.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    showNotification: true,
  };

  onLeaveFeedback = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
      showNotification: false,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles.container}>
        <Section title="Leave Feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {good + neutral + bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={good + neutral + bad}
              positivePercentage={
                good > 0 ? Math.round((good / (good + neutral + bad)) * 100) : 0
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
