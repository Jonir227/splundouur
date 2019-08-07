import React, { Suspense } from 'react';
import { ModalManager, GameManager } from './container';
import { Route, Switch } from 'react-router-dom';

const Main = React.lazy(() => import('./pages/Main'));
const Setting = React.lazy(() => import('./pages/Setting'));
const Game = React.lazy(() => import('./pages/Game'));

const Fallback = () => <div>로딩중입니다.</div>;

const App = () => {
  return (
    <ModalManager>
      <GameManager />
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/setting" component={Setting} />
          <Route path="/game" component={Game} />
        </Switch>
      </Suspense>
    </ModalManager>
  );
};

export default App;
