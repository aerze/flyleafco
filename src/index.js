import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Views from './Views';
import Home from './Views/Home';
import Library from './Views/Library';
// import './index.css';

import './Pure/pure.css'
import './Pure/grids-responsive.css'

import { Router, Route, IndexRoute, browserHistory } from 'react-router';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route component={Views}>
        <IndexRoute component={Home}/>
        <Route path="/library" component={Library}/>
      </Route>
    </Route>
  </Router>
  ), document.getElementById('root')
);
