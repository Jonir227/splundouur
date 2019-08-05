export interface CardModel {
  color: CardColor;
  value: number;
  score: number;
  price: Partial<Record<CardColor, number>>;
}
