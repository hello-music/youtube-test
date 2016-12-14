import React from 'react';
import { HomePage } from 'components';

class HomePageContainer extends React.Component {
  handleOptionSelected (value) {
    console.log('value: ', value);
  }

  render () {
    return (
      <HomePage onOptionSelected={this.handleOptionSelected} />
    );
  }
}

export default HomePageContainer;
