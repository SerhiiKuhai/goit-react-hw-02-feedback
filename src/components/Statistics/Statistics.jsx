// import PropTypes from 'prop-types';
import { Component } from 'react';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => {
      let eName = e.target.name;
      return { [eName]: prevState[eName] + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div onClick={this.handleClick}>
          <button name="good">Good</button>
          <button name="neutral">Neutra l</button>
          <button name="bad">Bad</button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
