import { Component } from 'react';
import PropTypes from 'prop-types';
import { Sections, Title } from './Sections.styled';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <Sections>
        <Title>{title}</Title>
        {children}
      </Sections>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
