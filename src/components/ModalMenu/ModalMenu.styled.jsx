import styled from '@emotion/styled';
import { theme } from 'styles';

export const ModalMenuArea = styled.div`
  align-items: center;
  width: 374px;
  height: 700px;
  background-color: ${theme.colors.backgroundOfBlock9};
  border-radius: ${theme.spacing(6)};
`;

export const IconsArea = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-top: ${theme.spacing(8)};
  padding-inline: ${theme.spacing(8)};
  margin-bottom: ${theme.spacing(18)};
`;

export const ClouseButton = styled.button`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-shadow: 0 0 0 0;
  padding: 0;

  &:hover,
  :focus {
    box-shadow: 0 0 0 0;
  }
`;

export const SvgClouse = styled.svg`
  width: ${theme.spacing(7)};
  height: ${theme.spacing(7)};
  stroke: ${theme.colors.white};
  transition: stroke 200ms linear;

  &:hover,
  :focus {
    stroke: ${theme.colors.backgroundOfBlock3};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(6)};
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing(16)};
`;

export const Item = styled.li`
  font-size: ${theme.fontSizes.large};
  line-height: ${theme.spacing(9)};
  color: ${theme.colors.white};
  align-items: center;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonEl = styled.button`
  margin-bottom: ${theme.spacing(29)};
`;
