import React from 'react';
import { HomePage } from 'components';
import { jsonGetYouTubeSearchResult } from 'json';

class HomePageContainer extends React.Component {

  constructor () {
    super();
    this.state = {
      cards: [],
    };
    this.handleOptionSelected = this.handleOptionSelected.bind(this);
  }

  /**
   * Extract the useful data
   */
  extractData (items) {
    let snippet = {};
    return items.map(item => {
      snippet = item.snippet;
      return {
        eTag: item.etag,
        kind: item.id.kind,
        publishedAt: snippet.publishedAt,
        title: snippet.title,
        user: snippet.channelTitle,
        thumbnailUrl: snippet.thumbnails.default.url,
      };
    });
  }

  handleOptionSelected (value) {
    const that = this;
    jsonGetYouTubeSearchResult(value).then(data => {
      that.setState({cards: that.extractData(data.data.items)});
    });
  }

  render () {
    return (
      <HomePage onOptionSelected={this.handleOptionSelected} cards={this.state.cards}/>
    );
  }
}

export default HomePageContainer;
