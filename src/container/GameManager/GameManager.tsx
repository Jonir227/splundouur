import React from 'react';
import { useSelector } from 'react-redux';
import { IRootStore } from '../../redux/reducers';
import { Redirect } from 'react-router-dom';
import { usePrevious } from '../../hooks';

export const GameManager = () => {
  const gameStatus = useSelector((store: IRootStore) => store.global.gameStatus);
  const prevGameStatus = usePrevious(gameStatus);

  if (gameStatus === prevGameStatus) {
    return null;
  }

  switch (gameStatus) {
    case 'MAIN': {
      return <Redirect to="/" push />;
    }
    case 'SETTING': {
      return <Redirect to="/setting" push />;
    }
    case 'STARTED': {
      return <Redirect to="/game" push />;
    }
  }
};
