import styled from '@emotion/styled';
import { theme } from 'styles';

export const ReasonsArea = styled.div`
  width: 100%;
  height: 726px;
  background-color: ${theme.colors.backgroundOfBlock4};
  border: none;
  border-radius: ${theme.spacing(7.5)};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(6)};
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing(20)};
`;

export const LogoTop = styled.svg`
  position: absolute;
  top: ${theme.spacing(6)};
  left: 0;
`;

export const LogoBottom = styled.svg`
  position: absolute;
  bottom: ${theme.spacing(6)};
  right: 0;
`;

export const Info = styled.div`
  z-index: 9999;
  max-width: 100%;
  height: auto;
  padding: ${theme.spacing(18)} ${theme.spacing(8)};
  padding-right: ${theme.spacing(5.5)};
  background-color: ${theme.colors.backgroundOfBlock9};
  border: none;
  border-radius: ${theme.spacing(7.5)};
`;

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
