import React from 'react';
import { ModalManager, GameManager } from './container';
import { Route, Switch } from 'react-router-dom';
import { Main, Game } from './pages';

function App() {
  return (
    <ModalManager>
      <GameManager />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/setting" render={() => <div>hi, this is setting</div>} />
        <Route path="/game" component={Game} />
      </Switch>
    </ModalManager>
  );
}

export default App;
