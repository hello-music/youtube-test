const api = {
  googleAutoSuggestURL: '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=',
  youTubeSearchUrl: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCDH1-ACE9Hr82u01904QJkyDXbAAgfx6k&q=',
};

export default {
  getGoogleAutoSuggestUrl (query) {
    return `${api.googleAutoSuggestURL}${query}`;
  },
  getYoutubeSearchUrl (query) {
    return `${api.youTubeSearchUrl}${query}`;
  },
};
