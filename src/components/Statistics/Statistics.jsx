import { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridStatistics } from './Statistics.styled';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <Grid>
          <GridStatistics>Good:{good}</GridStatistics>
          <GridStatistics>Neutral:{neutral}</GridStatistics>
          <GridStatistics>Bad:{bad}</GridStatistics>
          <GridStatistics>Total: {total}</GridStatistics>
          {good !== 0 && (
            <GridStatistics>
              Positive feedback: {positivePercentage}%
            </GridStatistics>
          )}
        </Grid>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
