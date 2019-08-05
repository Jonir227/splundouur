import { CardModel } from './CardModel';

export interface PlayerModel {
  name: string;
  owns: Record<CardColor, CardModel[]>;
  coins: Record<CardColor, number> & { gold: number };
}
