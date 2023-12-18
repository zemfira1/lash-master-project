import styled from '@emotion/styled';
import { theme } from 'styles';

export const InfoArea = styled.div`
  max-width: 100%;
  max-height: 100%;
  padding: ${theme.spacing(20)} ${theme.spacing(8.2)};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(18)};
  align-items: center;
`;

export const Title = styled.h2`
  color: ${theme.colors.white};
  font-size: ${theme.spacing(10)};
  font-weight: ${theme.fontWeight.semiBold};
  line-height: ${theme.spacing(16.5)};
`;
