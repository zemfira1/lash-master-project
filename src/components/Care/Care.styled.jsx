import styled from '@emotion/styled';
import { theme } from 'styles';

export const CareArea = styled.div`
  position: relative;
  max-width: 100%;
  height: auto;
  padding: ${theme.spacing(8)};
  padding-top: ${theme.spacing(18)};
  padding-bottom: ${theme.spacing(24)};
  background-color: ${theme.colors.backgroundOfBlock1};
  border: none;
  border-radius: ${theme.spacing(7.5)};
  margin-bottom: ${theme.spacing(6)};
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  line-height: ${theme.spacing(16.5)};
  margin-bottom: ${theme.spacing(12)};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(8)};
`;

export const Item = styled.li`
  display: flex;
  gap: ${theme.spacing(1.5)};
  align-items: start;
  font-size: ${theme.fontSizes.regular};
  font-weight: ${theme.fontWeight.medium};
  line-height: ${theme.spacing(6)};
  color: ${theme.colors.lightBlack};
`;

export const Logo = styled.svg`
  position: absolute;
  bottom: ${theme.spacing(8)};
  right: ${theme.spacing(8)};
`;
