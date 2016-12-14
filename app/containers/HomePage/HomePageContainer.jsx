import React from 'react';
import { HomePage } from 'components';
import { jsonGetYouTubeSearchResult } from 'json';

class HomePageContainer extends React.Component {
  handleOptionSelected (value) {
    jsonGetYouTubeSearchResult(value).then(data => {
      console.log('data2', data);
    });
  }

  render () {
    return (
      <HomePage onOptionSelected={this.handleOptionSelected} />
    );
  }
}

export default HomePageContainer;
