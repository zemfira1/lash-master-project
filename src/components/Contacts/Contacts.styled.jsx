import styled from '@emotion/styled';
import { theme } from 'styles';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(6)};
`;

export const ButtonEl = styled.button`
  padding: ${theme.spacing(2)} ${theme.spacing(2.5)};
`;

export const Link = styled.a`
  display: flex;
  gap: ${theme.spacing(4)};
  align-items: center;
`;

export const IconArea = styled.div`
  width: ${theme.spacing(10)};
  height: ${theme.spacing(10)};
  background-color: ${theme.colors.backgroundOfBlock9};
  border-radius: ${theme.spacing(3)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.regular};
  line-height: ${theme.spacing(6)};
  color: ${theme.colors.black};
`;
