import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <>
        <Container onClick={onLeaveFeedback}>
          <Button name="good">Good</Button>
          <Button name="neutral">Neutral</Button>
          <Button name="bad">Bad</Button>
        </Container>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
