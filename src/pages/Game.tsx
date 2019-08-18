import React from 'react';
import styled from 'styled-components';
import { Board, PlayerList } from '../container';

const GameContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const PlayerBoard = styled.div`
  flex: 0 0 10%;
`;
const CardBoard = styled.div`
  flex: 1;
`;
const Game = () => {
  return (
    <GameContainer>
      <PlayerBoard>
        <PlayerList />
      </PlayerBoard>
      <CardBoard>
        <Board />
      </CardBoard>
    </GameContainer>
  );
};

export default Game;
