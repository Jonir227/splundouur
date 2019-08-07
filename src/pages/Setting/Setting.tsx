import React, { ChangeEvent, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootStore } from '../../redux/reducers';
import PlayerCard from './PlayerCard';
import { setPlayerNumber } from '../../redux/actions/globalActions';

const Setting = () => {
  const players = useSelector((store: IRootStore) => store.player.players);
  const numOfPlayers = useSelector((store: IRootStore) => store.global.numberOfPlayer);

  const dispatch = useDispatch();

  const handlePlayerSelectChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      console.log(value);
      dispatch(setPlayerNumber(parseInt(value, 10)));
    },
    [dispatch],
  );

  return (
    <div>
      <h1>플레이할 플레이어의 수를 선택해주세요</h1>
      <select onChange={handlePlayerSelectChange} value={numOfPlayers}>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <div>
        {players.map(p => (
          <PlayerCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Setting;
