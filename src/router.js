import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Game from './routes/Game/Game.jsx';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Game} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
 