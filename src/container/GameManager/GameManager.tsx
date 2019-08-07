import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootStore } from '../../redux/reducers';
import { Redirect, withRouter } from 'react-router-dom';
import { RouterProps } from 'react-router';
import { setGameStatus } from '../../redux/actions/globalActions';

const _GameManager: FC<RouterProps> = ({ history }) => {
  const gameStatus = useSelector((store: IRootStore) => store.global.gameStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((h, action) => {
      if (action === 'POP') {
        dispatch(setGameStatus('MAIN'));
      }
    });
  }, []);

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

export const GameManager = withRouter(_GameManager);
