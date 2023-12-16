import styled from '@emotion/styled';
import { theme } from 'styles';

export const Wrapper = styled.section`
  width: 100%;
  margin-inline: auto;
  padding-inline: auto;

  @media screen and (min-width: 375px) {
    width: ${theme.spacing(89.5)};
  }

  @media screen and (min-width: 768px) {
    width: ${theme.spacing(186)};
  }

  @media screen and (min-width: 1440px) {
    width: ${theme.spacing(352)};
  }
`;
