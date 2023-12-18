import styled from '@emotion/styled';
import { theme } from 'styles';
import photoOfMaster from '../../images/photo.png';

export const AboutArea = styled.div`
  padding-top: ${theme.spacing(18)};
  padding-bottom: ${theme.spacing(61)};
  padding-right: ${theme.spacing(8)};
  position: relative;
  margin-bottom: ${theme.spacing(6)};
`;

export const Title = styled.h2`
  padding-left: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(4)};
`;

export const Photo = styled.div`
  width: 100%;
  height: ${theme.spacing(111)};
  background-image: url(${photoOfMaster});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: ${theme.spacing(6)};
`;

export const Info = styled.div`
  position: absolute;
  bottom: ${theme.spacing(18)};
  right: 0;
  width: ${theme.spacing(64)};
  height: auto;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(6)};

  padding: ${theme.spacing(6)};
  background-color: ${theme.colors.backgroundOfBlock4};
  border: none;
  border-radius: ${theme.spacing(6)};
`;

export const Item = styled.li`
  font-size: ${theme.fontSizes.regular};
  font-weight: ${theme.fontWeight.medium};
  line-height: ${theme.spacing(6)};
  color: ${theme.colors.lightBlack};
`;
