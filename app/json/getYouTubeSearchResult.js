import axios from 'axios';
import Constants from 'config/constans';
const {getGoogleAutoSuggestUrl} = Constants;

const jsonGetYouTubeSearchResult = query => {
  return axios.get(getGoogleAutoSuggestUrl(query));
};

export default jsonGetYouTubeSearchResult;
