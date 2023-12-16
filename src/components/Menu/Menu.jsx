import { HeaderNav, Header } from './Menu.styled';
import sprite from '../../images/symbol-defs.svg';
import { Container } from 'components/Container';

export const Menu = () => {
  return (
    <Header>
      <Container>
        <HeaderNav>
          <svg width={204} height={40}>
            <use href={sprite + '#icon-logo'}></use>
          </svg>
          <svg width={32} height={16}>
            <use href={sprite + '#icon-menu-burger'}></use>
          </svg>
        </HeaderNav>
      </Container>
    </Header>
  );
};
