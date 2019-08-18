import React from 'react';
import styled from 'styled-components';
import { Card } from '../../components';
import cardData from '../../data';

const BoardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const DevBoard = styled.div`
  flex: 1 0 80%;
  display: flex;
  flex-direction: column;
`;
const DevCards = styled.div`
  flex: 1 0;
  display: flex;
  margin: 5px 0;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
const CoinBoard = styled.div`
  flex: 1;
`;
const NobleBoard = styled.div`
  flex: 1;
`;

const DEVCARDS = cardData.slice(0, 4);

export const Board = () => {
  return (
    <BoardContainer>
      <DevBoard>
        <DevCards>
          {DEVCARDS.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </DevCards>
        <DevCards>
          {DEVCARDS.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </DevCards>
        <DevCards>
          {DEVCARDS.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </DevCards>
      </DevBoard>
      <CoinBoard>동전들</CoinBoard>
      <NobleBoard>귀족들</NobleBoard>
    </BoardContainer>
  );
};
