import React from 'react';
import { ModalManager } from './container';
import { Route, Switch } from 'react-router-dom';
import { Main, Game } from './pages';

function App() {
  return (
    <ModalManager>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/game" component={Game} />
      </Switch>
    </ModalManager>
  );
}

export default App;
