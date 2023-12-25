import styled from '@emotion/styled';
import { theme } from 'styles';

export const FooterEl = styled.footer`
  color: ${theme.colors.white};
`;

export const Background = styled.div`
  border: none;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  background-color: ${theme.colors.backgroundOfBlock9};
  padding: 40px;
  padding-top: 56px;
  padding-right: 32px;
`;

export const Title = styled.h2`
  color: inherit;
  font-size: ${theme.fontSizes.xl};
  line-height: ${theme.spacing(13)};
  margin-bottom: ${theme.spacing(6)};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 45% 50%;
  grid-template-rows: 40px 40px 40px 40px;
  margin-bottom: ${theme.spacing(12)};
`;

export const Item = styled.li`
  font-size: ${theme.spacing(4.5)};
  line-height: ${theme.spacing(7.5)};
  align-items: center;
`;

export const ButtonEl = styled.button`
  margin-bottom: ${theme.spacing(29)};
`;

export const Copyright = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  align-items: center;
  justify-content: center;
`;

export const Autors = styled.div``;
