import React, { Component } from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedButton: null,
    };
  }

  handleMouseDown = option => {
    this.setState({ clickedButton: option });
  };

  handleMouseUp = option => {
    this.setState({ clickedButton: null });
    this.props.onLeaveFeedback(option);
  };

  handleMouseLeave = () => {
    this.setState({ clickedButton: null });
  };

  render() {
    const { options } = this.props;
    const { clickedButton } = this.state;

    return (
      <div>
        {options.map(option => (
          <button
            key={option}
            type="button"
            className={`${styles['feedback-btn']} ${styles[option]} ${
              clickedButton === option ? styles.clicked : ''
            }`}
            onMouseDown={() => this.handleMouseDown(option)}
            onMouseUp={() => this.handleMouseUp(option)}
            onMouseLeave={this.handleMouseLeave}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
