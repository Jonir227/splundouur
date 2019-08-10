import React, { useMemo } from 'react';
import styled from 'styled-components';
import { CardModel } from '../model';
import { BASE_SIZE, COLOR_ORDER } from '../constants';
import { entries } from '../utils/object';

const CardFrame = styled.div`
  flex: 1;
  max-width: 220px;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background-color: #cfcfcf;
  border: solid 1px black;
  margin: 3px;

  font-size: ${BASE_SIZE}vw;
  font-style: italic;
  font-family: 'Dancing Script';
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20%;
  height: 80%;
`;

const Value = styled.div`
  font-size: 1em;
  display: flex;
  padding: 10%;
  justify-content: center;
`;

const Color = styled.div<{ cardColor: CardColor }>`
  background-color: ${({ cardColor }) => cardColor};
  padding: 10%;
  border-radius: 100%;
  box-shadow: 1px 1px 1px;
`;

const Price = styled.div<{ cardColor: CardColor }>`
  position: relative;
  flex: 0 1 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 1px;
  color: white;
  background-color: ${({ cardColor }) => cardColor};
  border: 2px solid white;
  border-radius: 50%;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const Card = ({ value, color, price }: CardModel) => {
  const prices = useMemo(
    () => entries(price).sort(([first], [second]) => COLOR_ORDER[first] - COLOR_ORDER[second]),
    [price],
  );
  return (
    <CardFrame>
      <CardHeader>
        <Value>{value === 0 ? '' : value}</Value>
        <Color cardColor={color} />
      </CardHeader>
      <CardFooter>
        {prices.map(([color, cost]) => (
          <Price key={color} cardColor={color}>
            {cost}
          </Price>
        ))}
      </CardFooter>
    </CardFrame>
  );
};
