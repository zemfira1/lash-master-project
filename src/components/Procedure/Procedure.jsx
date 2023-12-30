import { nanoid } from 'nanoid';
import {
  ButtonEl,
  Item,
  ProcedureInfo,
  TitleArea,
  Title,
  TypeArea,
  PopularityEL,
  TypeEl,
  WeeksEl,
  SubTitle,
  DescriptionList,
  DescriptionItem,
  PriceArea,
  Price,
} from './Procedure.styled';

export const Procedure = ({
  procedure,
  popularity,
  type,
  weeks,
  description,
  price,
}) => {
  const nameArray = procedure.split(' ');

  return (
    <Item>
      <ProcedureInfo name={nameArray[0]}>
        <TitleArea>
          <Title>{procedure}</Title>
          <TypeArea>
            {popularity.length > 0 && <PopularityEL>{popularity}</PopularityEL>}
            <TypeEl name={nameArray[0]}>{type}</TypeEl>
          </TypeArea>
        </TitleArea>
        {weeks.length > 0 && <WeeksEl name={nameArray[0]}>{weeks}</WeeksEl>}
        <SubTitle>About Procedure</SubTitle>
        {description && description.length > 0 && (
          <DescriptionList>
            {description.map(item => (
              <DescriptionItem key={nanoid()}>{item}</DescriptionItem>
            ))}
          </DescriptionList>
        )}
        <PriceArea>
          <Price>Price: {price}$</Price>
        </PriceArea>
      </ProcedureInfo>
      <ButtonEl type="button">
        <a href="tel:+54011111111">Book Now</a>
      </ButtonEl>
    </Item>
  );
};
