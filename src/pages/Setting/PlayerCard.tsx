import React, { FC, ChangeEvent, useState, useCallback, KeyboardEvent } from 'react';
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

let isBlured = false;

const PlayerCard: FC<IPlayerCardProps> = ({ name, onChangeName }) => {
  const [editable, setEditable] = useState(false);

  const handleClickEdit = useCallback(
    (condition: boolean) => () => {
      if (isBlured) {
        isBlured = false;
        return;
      }
      setEditable(condition);
    },
    [setEditable],
  );

  const handleEnterPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        setEditable(false);
      }
    },
    [setEditable],
  );

  const handleInputBlur = useCallback(() => {
    setEditable(false);
    isBlured = true;
  }, [setEditable]);

  return (
    <div>
      <PlayerNameInput
        disabled={!editable}
        value={name}
        onChange={onChangeName}
        onBlur={handleInputBlur}
        onKeyPress={handleEnterPress}
      />
      {editable ? (
        <button onClick={handleClickEdit(false)}>done</button>
      ) : (
        <button onClick={handleClickEdit(true)}>edit</button>
      )}
    </div>
  );
};

export default React.memo(PlayerCard);
