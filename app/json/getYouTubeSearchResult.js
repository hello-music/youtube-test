import axios from 'axios';
import Constants from 'config/constans';
const {getYoutubeSearchUrl} = Constants;

const jsonGetYouTubeSearchResult = query => {
  return axios.get(getYoutubeSearchUrl(query));
};

export default jsonGetYouTubeSearchResult;
