import React from "react";
import styled from "styled-components";
import { CardModel } from "../model";
import { BASE_SIZE } from "../constants";

const CardFrame = styled.div`
  width: ${BASE_SIZE * 5}vw;
  height: ${BASE_SIZE * 8}vw;
  box-sizing: border-box;
  background-color: #cfcfcf;
  border: solid 1px black;
  margin: 3px;
  float: left;
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

const Value = styled.div`
  font-size: ${BASE_SIZE}vw;
  display: flex;
  width: ${BASE_SIZE}vw;
  height: ${BASE_SIZE}vw;
  justify-content: center;
  font-style: italic;
  font-family: "Dancing Script";
`;

const Color = styled.div<{ cardColor: CardColor }>`
  background-color: ${({ cardColor }) => cardColor};
  width: ${BASE_SIZE}vw;
  height: ${BASE_SIZE}vw;
  border-radius: 15px;
  box-shadow: 1px 1px 1px;
`;

export const Card = ({ value, color }: CardModel) => (
  <CardFrame>
    <CardHeader>
      <Value>{value === 0 ? "" : value}</Value>
      <Color cardColor={color} />
    </CardHeader>
  </CardFrame>
);
