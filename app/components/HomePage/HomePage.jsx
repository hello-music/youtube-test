import React, { PropTypes } from 'react';
import { AutoCompleteContainer, CardGridContainer } from 'containers';
import { pageContainer, autoCompleteContainer, cardGridContainer } from './styles.scss';

const HomePage = props => (
  <div className={pageContainer}>
    <div className={autoCompleteContainer}><AutoCompleteContainer onOptionSelected={props.onOptionSelected} /></div>
    <div className={cardGridContainer}><CardGridContainer cards={props.cards} /></div>
  </div>
);

HomePage.propTypes = {
  onOptionSelected: PropTypes.func,
  cards: PropTypes.array,
};

export default HomePage;
