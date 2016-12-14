import React, { PropTypes } from 'react';
import { card, cardImg, cardInfo, cardInfoContent, cardInfoContentDown } from './styles.scss';

// kind: item.id.kind,
// publishedAt: snippet.publishedAt,

const Card = props => (
  <div className={card}>
    <img className={cardImg} src={props.card.thumbnailUrl} />
    <div className={cardInfo}>
      <div className={cardInfoContent}>
        <p>{props.card.title}</p>
      </div>
      <div className={cardInfoContentDown}>
        <p>{props.card.user}</p>
      </div>
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
