import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as favouritesActionCreators from 'redux/modules/favourites';
import { Card } from 'components';

class CardContainer extends React.Component {

  constructor (props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave () {
    this.props.saveVideo(this.props.card);
  }

  render () {
    return (
      <Card card={this.props.card} onHandleSave={this.handleSave} isSaved={this.props.isSaved}/>
    );
  }
}

CardContainer.propTypes = {
  card: PropTypes.object.isRequired,
  // connected props
  saveVideo: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
};

function mapStateToProps ({favourites}, {card}) {
  return {
    isSaved: favourites.filter((video) => video.eTag === card.eTag).length === 1,
  };
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({...favouritesActionCreators}, dispatch))(CardContainer);
