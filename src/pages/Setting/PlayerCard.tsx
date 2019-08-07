import React, { FC } from 'react';
import { PlayerModel } from '../../model';

const PlayerCard: FC<PlayerModel> = ({ name }) => {
  return <div>{name}</div>;
};

export default PlayerCard;
