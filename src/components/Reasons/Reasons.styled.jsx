import styled from '@emotion/styled';
import { theme } from 'styles';

export const Title = styled.h2`
  color: ${theme.colors.white};
  font-size: ${theme.spacing(10.5)};
  line-height: ${theme.spacing(16.5)};
  margin-bottom: ${theme.spacing(12)};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(6)};
`;

export const Item = styled.li`
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  font-size: ${theme.fontSizes.regular};
  font-weight: ${theme.fontWeight.medium};
  line-height: ${theme.spacing(6)};
  color: ${theme.colors.black};
  background-color: ${theme.colors.mainbackground};
  border: none;
  border-radius: ${theme.spacing(6)};
  box-shadow: 0px 0px 14px 0px ${theme.colors.backgroundOfBlock4};
`;
