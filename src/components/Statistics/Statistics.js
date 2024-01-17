import React, { Component } from 'react';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={styles.statistics}>
        <p className={styles.feedback}>Good: {good}</p>
        <p className={styles.feedback}>Neutral: {neutral}</p>
        <p className={styles.feedback}>Bad: {bad}</p>
        <p className={`${styles.total} ${styles.feedback}`}>Total: {total}</p>
        <p className={`${styles.positive} ${styles.feedback}`}>
          Positive Feedback Percentage: {positivePercentage}%
        </p>
      </div>
    );
  }
}

export default Statistics;
