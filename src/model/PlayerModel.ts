import { CardModel } from './CardModel';

export interface PlayerModel {
  name: string;
  img: string;
  owns: Record<CardColor, CardModel[]>;
  coins: Record<CardColor, number> & { gold: number };
}
