import { Container } from 'components/Container';
import sprite from '../../images/symbol-defs.svg';
import reasons from '../../resources/reasons.json';
import { nanoid } from 'nanoid';
import {
  LogoBottom,
  LogoTop,
  ReasonsArea,
  Info,
  Title,
  List,
  Item,
} from './Reasons.styled';

export const Reasons = () => {
  return (
    <section>
      <Container>
        <ReasonsArea>
          <LogoTop width={288} height={326}>
            <use href={sprite + '#icon-logo-za'}></use>
          </LogoTop>
          <LogoBottom width={288} height={326}>
            <use href={sprite + '#icon-logo-za'}></use>
          </LogoBottom>

          <Info>
            <Title>You need eyelashes because it is...</Title>
            {reasons.length > 0 && (
              <List>
                {reasons.map(item => (
                  <Item key={nanoid()}>{item}</Item>
                ))}
              </List>
            )}
          </Info>
        </ReasonsArea>
      </Container>
    </section>
  );
};
