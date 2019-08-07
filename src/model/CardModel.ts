export interface CardModel {
  rank: 1 | 2 | 3;
  color: CardColor;
  value: number;
  score: number;
  price: Partial<Record<CardColor, number>>;
}
