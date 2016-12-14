import React, { PropTypes } from 'react';
import { CardGridContainer } from 'containers';
import { pageContainer, cardGridContainer } from './styles.scss';

const FavouritesPage = props => (
  <div className={pageContainer}>
    <div className={cardGridContainer}>
      <CardGridContainer cards={props.cards} />
    </div>
  </div>
);

FavouritesPage.propTypes = {
  cards: PropTypes.array,
};
export default FavouritesPage;
