import styled from '@emotion/styled';
import { theme } from 'styles';

export const PortfolioArea = styled.div`
  max-width: 100%;
  height: auto;
  padding-inline: ${theme.spacing(8)};
  padding-top: ${theme.spacing(18)};
  padding-bottom: ${theme.spacing(22)};
  border: none;
  border-radius: ${theme.spacing(7.5)};
  background-color: ${theme.colors.backgroundOfBlock9};
  margin-bottom: ${theme.spacing(6)};
  position: relative;
`;

export const Title = styled.h2`
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing(12)};
`;

export const Photos = styled.ul``;

export const Photo = styled.li`
  display: flex;

  :nth-of-type(even) {
    justify-content: flex-end;
    transform: rotate(11deg);
    margin-top: ${theme.spacing(-15)};
    padding-right: ${theme.spacing(4)};
  }

  :nth-of-type(odd) {
    justify-content: flex-start;
    padding-left: ${theme.spacing(3)};
  }

  :first-of-type {
    transform: rotate(12deg);
  }

  :last-of-type {
    transform: rotate(-15deg);
    margin-top: ${theme.spacing(-7.5)};
  }
`;

export const Image = styled.img`
  display: block;
  object-fit: cover;
  width: ${theme.spacing(42.5)};
  height: ${theme.spacing(42.5)};
  border: none;
  border-radius: ${theme.spacing(7.5)};
  box-shadow: 0px 0px 16px 0px ${theme.colors.white};
`;

export const Icon = styled.svg`
  position: absolute;
  bottom: ${theme.spacing(8)};
  right: ${theme.spacing(8)};
`;
