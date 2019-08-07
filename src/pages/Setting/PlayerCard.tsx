import React, { FC, ChangeEvent, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { PlayerModel } from '../../model';

const PlayerNameInput = styled.input`
  &:disabled {
    border: none;
    box-shadow: none;
    background-color: white;
    color: black;
  }
  border: none;
  border-bottom: 1px solid black;
`;

interface IPlayerCardProps extends PlayerModel {
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PlayerCard: FC<IPlayerCardProps> = ({ name, onChangeName }) => {
  const [editable, setEditable] = useState(false);

  const handleClickEdit = useCallback(
    (condition: boolean) => () => {
      setEditable(condition);
    },
    [setEditable],
  );

  const handleEnterPress = useCallback(
    (e: WindowEventMap['keypress']) => {
      if (e.keyCode === 13) {
        setEditable(false);
      }
    },
    [setEditable],
  );

  useEffect(() => {
    if (editable) {
      window.addEventListener('keypress', handleEnterPress);
    }
    return () => {
      window.removeEventListener('keypress', handleEnterPress);
    };
  }, [editable, handleEnterPress]);

  return (
    <div>
      <PlayerNameInput disabled={!editable} value={name} onChange={onChangeName} />
      {editable ? (
        <button onClick={handleClickEdit(false)}>done</button>
      ) : (
        <button onClick={handleClickEdit(true)}>edit</button>
      )}
    </div>
  );
};

export default React.memo(PlayerCard);
