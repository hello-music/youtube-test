import React, { PropTypes } from 'react';
import { card, cardImg, cardInfo } from './styles.scss';

// kind: item.id.kind,
// publishedAt: snippet.publishedAt,

const Card = props => (
  <div className={card}>
    <img className={cardImg} src={props.card.thumbnailUrl} />
    <div className={cardInfo}>
      <p>{props.card.title}</p>
      <p>{props.card.user}</p>
    </div>
    {!props.isSaved && (<a href='#' onClick={props.onHandleSave}>{`Save`}</a>)}
  </div>
);

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onHandleSave: PropTypes.func,
  isSaved: PropTypes.bool,
};

export default Card;
