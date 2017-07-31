//import React from 'react';
//import { Route, IndexRoute } from 'react-router';

import App from './components/App';
/*import Home from './containers/Home';
import About from './containers/About';
import New from './containers/New';
import New1 from './containers/New1';
import NotFound from './containers/NotFound';*/

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

/*export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="new" component={New}/>
    <Route path="new1" component={New1}/>
    <Route path="*" component={NotFound}/>
  </Route>
);*/

export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./containers/Home').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: 'about',
      getComponent(location, cb) {
        require("./static/css/about.scss");
        System.import('./containers/About').then(loadRoute(cb)).catch(errorLoading);
      }
    },
  ]
};


