import {
  Section,
  LogoArea,
  MouseArea,
  ArrowArea,
  Arrow,
  Mouse,
} from './Welcome.styled';
import sprite from '../../images/symbol-defs.svg';
import { Container } from 'components/Container';

export const Welcome = () => {
  return (
    <section>
      <Container>
        <Section>
          <LogoArea>
            <svg width={312} height={214}>
              <use href={sprite + '#icon-Property'}></use>
            </svg>
          </LogoArea>
          <MouseArea>
            <Mouse>
              <use href={sprite + '#icon-mouse'}></use>
            </Mouse>
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
    </section>
  );
};
