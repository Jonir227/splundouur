import React, { ChangeEvent, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Prompt } from 'react-router-dom';
import { IRootStore } from '../../redux/reducers';
import PlayerCard from './PlayerCard';
import { setPlayerNumber, setGameStatus } from '../../redux/actions/globalActions';
import { setPlayerNamme, setPlayerImg } from '../../redux/actions/playerActions';

const Setting = () => {
  const [isModified, setModifiied] = useState(false);
  const players = useSelector((store: IRootStore) => store.player.players);
  const numOfPlayers = useSelector((store: IRootStore) => store.global.numberOfPlayer);

  const dispatch = useDispatch();

  const handlePlayerSelectChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      dispatch(setPlayerNumber(parseInt(value, 10)));
      setModifiied(true);
    },
    [dispatch, setModifiied],
  );

  const handlePlayerNameChange = useCallback(
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      dispatch(setPlayerNamme(index, value));
      setModifiied(true);
    },
    [dispatch],
  );

  const handlePlayerImgChange = useCallback(
    (index: number) => (img: string) => {
      dispatch(setPlayerImg(index, img));
    },
    [dispatch],
  );

  const handleGameStart = () => dispatch(setGameStatus('STARTED'));

  return (
    <>
      {isModified && <Prompt message="홈 화면으로 돌아가시겠습니까?" />}
      <div>
        <h1>플레이할 플레이어의 수를 선택해주세요</h1>
        <select onChange={handlePlayerSelectChange} value={numOfPlayers}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
        <div>
          {players.map((p, index) => (
            <PlayerCard
              key={p.id}
              {...p}
              onChangeName={handlePlayerNameChange(index)}
              onChangeImg={handlePlayerImgChange(index)}
            />
          ))}
        </div>
        <div>
          <button onClick={handleGameStart}>시작하기</button>
        </div>
      </div>
    </>
  );
};

export default Setting;
