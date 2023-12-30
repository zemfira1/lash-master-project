import styled from '@emotion/styled';
import { theme } from 'styles';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
  justify-content: center;
  align-items: center;
`;

const setBgColor = props => {
  switch (props.name) {
    case 'Classic':
      return '#F1F1F1';
    case 'Hybrid':
      return '#9A8AAE';
    case 'Wet':
      return '#7B85E2';
    case 'Removal':
      return '#F1F1F1';
    default:
      return '#F1F1F1';
  }
};

const setTextColor = props => {
  switch (props.name) {
    case 'Classic':
      return '#343434';
    case 'Hybrid':
      return '#fff';
    case 'Wet':
      return '#fff';
    case 'Removal':
      return '#343434';
    default:
      return '#343434';
  }
};

export const ProcedureInfo = styled.div`
  border: none;
  border-radius: ${theme.spacing(7.5)};
  background-color: ${setBgColor};
  color: ${setTextColor};
  padding: ${theme.spacing(6)} ${theme.spacing(4)};
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing(8)};
`;

export const Title = styled.h3`
  font-size: 30px;
  font-weight: ${theme.fontWeight.semiBold};
`;

export const TypeArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing(2)};
`;

export const PopularityEL = styled.p`
  width: ${theme.spacing(24)};
  height: ${theme.spacing(10.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.medium};
  background-color: ${theme.colors.backgroundOfBlock7};
  color: ${theme.colors.grey2};
  border: none;
  border-radius: ${theme.spacing(6)};
`;

const setTypeElColor = props => {
  switch (props.name) {
    case 'Classic':
      return '#fff';
    case 'Hybrid':
      return '#343434';
    case 'Wet':
      return '#343434';
    case 'Removal':
      return '#fff';
    default:
      return '#343434';
  }
};

const setTypeElBgColor = props => {
  switch (props.name) {
    case 'Classic':
      return '#343434';
    case 'Hybrid':
      return '#fff';
    case 'Wet':
      return '#fff';
    case 'Removal':
      return '#FF8777';
    default:
      return '#343434';
  }
};

export const TypeEl = styled.p`
  width: ${theme.spacing(24)};
  height: ${theme.spacing(10.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.medium};
  background-color: ${setTypeElBgColor};
  color: ${setTypeElColor};
  border: none;
  border-radius: ${theme.spacing(6)};
`;

export const WeeksEl = styled.p`
  width: ${theme.spacing(29.5)};
  height: ${theme.spacing(10)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSizes.regular};
  font-weight: ${theme.fontWeight.medium};
  background-color: ${setTypeElBgColor};
  color: ${setTypeElColor};
  border-radius: ${theme.spacing(6)};
  margin-bottom: ${theme.spacing(6)};
`;

export const SubTitle = styled.h4`
  font-size: ${theme.spacing(5)};
  font-weight: ${theme.fontWeight.semiBold};
  margin-bottom: ${theme.spacing(4)};
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
  margin-bottom: ${theme.spacing(6)};
`;

export const DescriptionItem = styled.li`
  font-size: ${theme.fontSizes.small};
  font-weight: ${theme.fontWeight.medium};
`;

export const PriceArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Price = styled.p`
  width: ${theme.spacing(34)};
  height: ${theme.spacing(11)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.medium};
  background-color: ${theme.colors.white};
  color: ${theme.colors.grey2};
  border: none;
  border-radius: ${theme.spacing(6)};
`;

export const ButtonEl = styled.button`
  max-width: ${theme.spacing(46)};
`;
