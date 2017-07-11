import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './containers/Home';
import About from './containers/About';
import New from './containers/New';
import New1 from './containers/New1';
import NotFound from './containers/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="new" component={New}/>
    <Route path="new1" component={New1}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
