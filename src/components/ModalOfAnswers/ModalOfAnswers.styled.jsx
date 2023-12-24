import styled from '@emotion/styled';
import { theme } from 'styles';

export const Info = styled.div`
  width: ${theme.spacing(57)};
  height: auto;
  padding-inline: ${theme.spacing(6)};
  padding-top: ${theme.spacing(8)};
  padding-bottom: ${theme.spacing(4)};
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.medium};
  border: none;
  border-radius: ${theme.spacing(6)};
`;

export const ClouseButton = styled.button`
  position: absolute;
  top: ${theme.spacing(4)};
  right: ${theme.spacing(4)};
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
  width: ${theme.spacing(5)};
  height: ${theme.spacing(5)};
  stroke: ${theme.colors.black};
  transition: stroke 200ms linear;

  &:hover,
  :focus {
    stroke: ${theme.colors.backgroundOfBlock3};
  }
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.regular};
  line-height: ${theme.spacing(6)};
  margin-bottom: ${theme.spacing(6)};
`;

export const Description = styled.p`
  font-size: ${theme.spacing(3)};
  line-height: ${theme.spacing(4.5)};
`;
