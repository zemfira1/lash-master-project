import { Section, MouseArea, ArrowArea, Arrow } from './Welcome.styled';
import sprite from '../../images/symbol-defs.svg';
import { Container } from 'components/Container';

export const Welcome = () => {
  return (
    <Container>
      <Section>
        <svg width={312} height={214}>
          <use href={sprite + '#icon-Property'}></use>
        </svg>
        <MouseArea>
          <svg width={64} height={64}>
            <use href={sprite + '#icon-mouse'}></use>
          </svg>
          <ArrowArea>
            <Arrow width={14} height={7}>
              <use href={sprite + '#icon-Vector'}></use>
            </Arrow>
            <Arrow width={14} height={7}>
              <use href={sprite + '#icon-Vector'}></use>
            </Arrow>
            <Arrow width={14} height={7}>
              <use href={sprite + '#icon-Vector'}></use>
            </Arrow>
          </ArrowArea>
        </MouseArea>
      </Section>
    </Container>
  );
};
