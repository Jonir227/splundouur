import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IRootStore } from '../../redux/reducers';

const Lists = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Player = styled.div`
  display: flex;
`;
const Profile = styled.div`
  flex: 1;
  text-align: center;
  img {
    display: block;
    width: 100%;
  }
`;
const Coins = styled.div`
  flex: 1;
`;

export const PlayerList: React.SFC = () => {
  const players = useSelector((state: IRootStore) => state.player.players);
  return (
    <Lists>
      {players.map(({ id, name, img }) => (
        <Player key={id}>
          <Player>
            <Profile>
              <img src={img} alt={`player ${id}의 프로필`} />
              <span>{name}</span>
            </Profile>
            <Coins />
          </Player>
        </Player>
      ))}
    </Lists>
  );
};
