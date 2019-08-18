import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IRootStore } from '../../redux/reducers';

const Lists = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
const Player = styled.div`
  flex: 1;
`;

export const PlayerList: React.SFC = () => {
  const players = useSelector((state: IRootStore) => state.player.players);
  return (
    <Lists>
      {players.map(({ id, name }) => (
        <Player key={id}>{name}</Player>
      ))}
    </Lists>
  );
};
