import styled from '@emotion/styled';
import { theme } from 'styles';

export const QuestionsArea = styled.div`
  max-width: 100%;
  height: auto;
  padding-inline: ${theme.spacing(8)};
  padding-top: ${theme.spacing(18)};
  padding-bottom: ${theme.spacing(24)};
  border: none;
  border-radius: ${theme.spacing(7.5)};
  background-color: ${theme.colors.backgroundOfBlock9};
  margin-bottom: ${theme.spacing(6)};
  position: relative;
`;

export const Title = styled.h2`
  font-size: ${theme.spacing(8.5)};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing(12)};
`;

export const List = styled.ul``;

export const Icon = styled.svg`
  position: absolute;
  bottom: ${theme.spacing(8)};
  right: ${theme.spacing(8)};
`;
