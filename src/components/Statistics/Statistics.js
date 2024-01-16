import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
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
};

export default Statistics;
