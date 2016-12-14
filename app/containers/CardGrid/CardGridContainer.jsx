import React, { PropTypes } from 'react';
import { CardGrid } from 'components';

class CardGridContainer extends React.Component {

  constructor (props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave () {
  }

  render () {
    return (
      <div>
        <CardGrid cards={this.props.cards} />
      </div>
    );
  }
}

CardGridContainer.propTypes = {
  cards: PropTypes.array,
};

export default CardGridContainer;
