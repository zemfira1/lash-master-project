import styled from '@emotion/styled';
import { theme } from 'styles';
import promotion from '../../images/promotion1.png';

export const PromotionWrapper = styled.div`
  width: 100%;
  height: ${theme.spacing(177)};
  background-image: url(${promotion});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: ${theme.spacing(7.5)};
  margin-bottom: ${theme.spacing(20)};
  box-shadow: 0px 0px 8px 0px ${theme.colors.grey1};
`;
