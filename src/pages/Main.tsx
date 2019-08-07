import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../redux/actions/globalActions';

const Main = () => {
  const dispatch = useDispatch();

  const handleStartClick = useCallback(() => {
    dispatch(startGame());
  }, [dispatch]);

  return (
    <div>
      게임을 시작해볼까..?
      <button onClick={handleStartClick}>start</button>
    </div>
  );
};

export default Main;
