import React, { PropTypes } from 'react';
import { CardContainer } from 'containers';
import { cardGrid, cardWrapper } from './styles.scss';

const CardGrid = props => (
  <div className={cardGrid}>
    {props.cards.map(card => (
      <div className={cardWrapper} key={card.eTag}>
        <CardContainer card={card} />
      </div>
    ))}
  </div>
);

CardGrid.propTypes = {
  cards: PropTypes.array,
};

CardGrid.defaultProps = {
  cards: [],
};

export default CardGrid;
