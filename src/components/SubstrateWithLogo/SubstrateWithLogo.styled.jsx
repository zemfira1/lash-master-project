import styled from '@emotion/styled';
import { theme } from 'styles';

export const Substrate = styled.div`
  width: 100%;
  height: auto;
  padding-top: 72px;
  padding-bottom: 72px;
  background-color: ${theme.colors.backgroundOfBlock4};
  border: none;
  border-radius: ${theme.spacing(7.5)};
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing(6)};
`;

export const LogoTop = styled.svg`
  position: absolute;
  top: ${theme.spacing(6)};
  left: 0;
`;

export const LogoBottom = styled.svg`
  position: absolute;
  bottom: ${theme.spacing(6)};
  right: 0;
`;

export const Info = styled.div`
  z-index: 9999;
  max-width: 100%;
  height: auto;
  padding: ${theme.spacing(18)} ${theme.spacing(8)};
  background-color: ${theme.colors.backgroundOfBlock9};
  border: none;
  border-radius: ${theme.spacing(7.5)};
`;
