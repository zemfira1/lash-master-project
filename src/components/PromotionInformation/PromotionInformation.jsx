import { InfoArea, Title } from './PromotionInformation.styled';
import sprite from '../../images/symbol-defs.svg';

export const PromotionInformation = () => {
  const date = new Date();
  const monthNumber = date.getMonth();
  const array = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = array[monthNumber];

  return (
    <InfoArea>
      <svg width={71} height={80}>
        <use href={sprite + '#icon-logoZA'}></use>
      </svg>
      <Title>All {month} 20% discount on the first extension</Title>
      <button type="button">
        <a href="tel:+1401111111">Book Now</a>
      </button>
    </InfoArea>
  );
};
