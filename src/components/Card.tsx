import React, { useMemo } from "react";
import styled from "styled-components";
import { CardModel } from "../model";
import { BASE_SIZE, COLOR_ORDER } from "../constants";

const CardFrame = styled.div`
  position: relative;
  width: ${BASE_SIZE * 5}vw;
  height: ${BASE_SIZE * 8}vw;
  box-sizing: border-box;
  background-color: #cfcfcf;
  border: solid 1px black;
  margin: 3px;
  float: left;

  font-style: italic;
  font-family: "Dancing Script";
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: ${BASE_SIZE / 10}vw;
  box-sizing: border-box;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${BASE_SIZE}vw;
`;

const Value = styled.div`
  font-size: ${BASE_SIZE}vw;
  display: flex;
  width: ${BASE_SIZE}vw;
  height: ${BASE_SIZE}vw;
  justify-content: center;
`;

const Color = styled.div<{ cardColor: CardColor }>`
  background-color: ${({ cardColor }) => cardColor};
  width: ${BASE_SIZE}vw;
  height: ${BASE_SIZE}vw;
  border-radius: 15px;
  box-shadow: 1px 1px 1px;
`;

const Price = styled.div<{ cardColor: CardColor }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${BASE_SIZE * 0.9}vw;
  height: ${BASE_SIZE * 0.9}vw;
  margin: 1px;
  color: white;
  background-color: ${({ cardColor }) => cardColor};
  font-size: ${BASE_SIZE * 0.8}vw;
  border: 2px solid white;
  border-radius: 100%;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const Card = ({ value, color, price }: CardModel) => {
  const prices = useMemo(() => {
    return (Object.entries(price) as [CardColor, number][]).sort(([first], [second]) => COLOR_ORDER[first] - COLOR_ORDER[second]);
  }, [price]);
  return (
    <CardFrame>
      <CardHeader>
        <Value>{value === 0 ? "" : value}</Value>
        <Color cardColor={color} />
      </CardHeader>
      <CardFooter>
        {prices.map(([color, cost]) => <Price key={color} cardColor={color}>{cost}</Price>)}
      </CardFooter>
    </CardFrame>
  )
};
