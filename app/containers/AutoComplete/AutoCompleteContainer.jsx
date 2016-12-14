import React, { PropTypes } from 'react';
import { Typeahead } from 'react-typeahead';
import JSONP from 'jsonp';
import Constants from 'config/constans';
const {getGoogleAutoSuggestUrl} = Constants;

class AutoCompleteContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      query: '',
      options: [],
    };
    this.handleUpdateQuery = this.handleUpdateQuery.bind(this);
  }

  handleUpdateQuery (e) {
    const inputValue = e.target.value;
    this.setState({
      query: inputValue,
    });
    this.fetchOptions(inputValue);
  }

  fetchOptions (inputValue) {
    const that = this;

    JSONP(getGoogleAutoSuggestUrl(inputValue), function (error, data) {
      if (error) {
        console.log('error', error);
      } else {
        const searchResults = data[1].map(result => result[0]);
        that.setState({
          options: searchResults,
        });
      }
    });
  }

  render () {
    return (
      <div>
        <Typeahead
          options={this.state.options}
          placeholder='Search on YouTube'
          onOptionSelected={this.props.onOptionSelected}
          onKeyUp={this.handleUpdateQuery} />
      </div>
    );
  }
}

AutoCompleteContainer.propTypes = {
  onOptionSelected: PropTypes.func,
};

export default AutoCompleteContainer;
