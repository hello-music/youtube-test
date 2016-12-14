import React, { PropTypes } from 'react';
import { AutoCompleteContainer } from 'containers';
import { pageContainer, autoCompleteContainer } from './styles.scss';

const HomePage = props => (
  <div className={pageContainer}>
    <div className={autoCompleteContainer}><AutoCompleteContainer onOptionSelected={props.onOptionSelected}/></div>
  </div>
);

HomePage.propTypes = {
  onOptionSelected: PropTypes.func,
};

export default HomePage;
