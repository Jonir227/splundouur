import React, {
  FC,
  ChangeEvent,
  useState,
  useCallback,
  KeyboardEvent,
  useRef,
  useEffect,
} from 'react';
import styled from 'styled-components';
import { PlayerModel } from '../../model';
import { useOnClickOutside } from '../../hooks';

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
  const inputRef = useRef<HTMLInputElement>(null);

  const outSideClickWrapperRef = useOnClickOutside<HTMLDivElement>(() => {
    setEditable(false);
  });

  /**
   * Edit시에 실행하는 동작
   */
  useEffect(() => {
    if (editable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editable]);

  const handleClickEdit = useCallback(
    (condition: boolean) => () => {
      setEditable(condition);
    },
    [setEditable],
  );

  const handleEnterPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const keyCode = e.keyCode || e.which;
      if (keyCode === 13) {
        setEditable(false);
      }
    },
    [setEditable],
  );

  return (
    <div ref={outSideClickWrapperRef}>
      <PlayerNameInput
        ref={inputRef}
        disabled={!editable}
        value={name}
        onChange={onChangeName}
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
