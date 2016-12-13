import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { MainContainer, HomePageContainer, FavouritesPageContainer } from 'containers';

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer}>
        <IndexRoute component={HomePageContainer}/>
        <Route path='favourites' component={FavouritesPageContainer}/>
        <Route path='*' component={HomePageContainer}/>
      </Route>
    </Router>
  );
}
