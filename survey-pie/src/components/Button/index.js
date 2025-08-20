import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERITIARY } from '../../constants/color';

const colorMap = {
  PRIMARY, //=== PRIMARY: PRIMARY
  SECONDARY,
  TERITIARY,
};
/*
function getColor(type1, type2) {
  if (type1 === 'PRIMARY') {
    return PRIMARY.BUTTON.DEFAULT.COLOR;
  } else if (type1.type === 'SECONDARY') {
    return SECONDARY.BUTTON.DEFAULT.COLOR;
  }
}
*/
const Button = styled.button`
  padding: 16px 24px;
  width: 200px;

  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border-radius: 4px;
  border: none;
  font-weight: bold;

  border: ${({ type }) =>
    type === 'TERITIARY'
      ? `1px solid ${TERITIARY.BUTTON.DEFAULT.BACKGROUND}`
      : 'none'};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERITIARY'
        ? `1px solid ${TERITIARY.BUTTON.HOVER.BACKGROUND}`
        : 'none'};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERITIARY'
        ? `1px solid ${TERITIARY.BUTTON.PRESSED.BACKGROUND}`
        : 'none'};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERITIARY'
        ? `1px solid ${TERITIARY.BUTTON.DISABLED.BACKGROUND}`
        : 'none'};
  }
`;

export default Button;
