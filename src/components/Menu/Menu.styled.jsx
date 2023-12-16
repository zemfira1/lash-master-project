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
