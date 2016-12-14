import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FavouritesPage } from 'components';

const FavouritesPageContainer = props => (<FavouritesPage cards={props.favourites} />);

FavouritesPageContainer.propTypes = {
  card: PropTypes.object,
  // connected props
  favourites: PropTypes.array.isRequired,
};

function mapStateToProps ({favourites}) {
  return {
    favourites,
  };
}

export default connect(mapStateToProps)(FavouritesPageContainer);
