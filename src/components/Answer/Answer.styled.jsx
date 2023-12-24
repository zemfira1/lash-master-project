import styled from '@emotion/styled';
import { theme } from 'styles';

export const Item = styled.li`
  display: flex;
  border: none;
  border-radius: ${theme.spacing(6)};
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  margin-top: ${theme.spacing(2)};

  :nth-of-type(even) {
    justify-content: flex-start;
    transform: rotate(-10deg);
    margin-top: ${theme.spacing(0)};
    margin-left: ${theme.spacing(13)};
  }

  :nth-of-type(odd) {
    transform: rotate(11deg);
    justify-content: flex-end;
  }

  :nth-of-type(3n + 2) {
    background-color: ${theme.colors.backgroundOfBlock1};
    width: 222px;
  }

  :nth-of-type(5n + 1) {
    width: 216px;
  }

  :nth-of-type(5n + 3) {
    background-color: ${theme.colors.backgroundOfBlock2};
    width: 242px;
    color: ${theme.colors.white};
  }

  :nth-of-type(3n + 4) {
    background-color: ${theme.colors.backgroundOfBlock3};
    width: 244px;
    color: ${theme.colors.white};
  }

  :nth-of-type(n + 9) {
    background-color: ${theme.colors.white};
    width: 244px;
  }

  :first-of-type {
    transform: rotate(0deg);
  }
`;

export const ButtonEl = styled.button`
  box-shadow: 0 0 0 0;
  font-size: ${theme.fontSizes.regular};
  line-height: ${theme.spacing(6)};
  padding: ${theme.spacing(2)} ${theme.spacing(6)};
  color: inherit;
  background-color: inherit;
`;

export const Icon = styled.svg`
  position: absolute;
  bottom: ${theme.spacing(8)};
  right: ${theme.spacing(8)};
`;
