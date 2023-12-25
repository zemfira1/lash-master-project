import styled from '@emotion/styled';
import { theme } from 'styles';

export const Header = styled.header`
  margin-top: ${theme.spacing(4)};
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: ${theme.spacing(18)};
  padding-inline: ${theme.spacing(6)};
  border: none;
  border-radius: ${theme.spacing(6)};
  background-color: ${theme.colors.menuBackground};
  margin-bottom: ${theme.spacing(6)};
`;

export const ButtonEl = styled.button`
  padding: 0;
  box-shadow: 0 0 0 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover,
  :focus {
    box-shadow: 0 0 0 0;
  }
`;
