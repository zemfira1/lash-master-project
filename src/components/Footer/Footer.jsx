import { Container } from 'components/Container';
import {
  Autors,
  Background,
  ButtonEl,
  Copyright,
  FooterEl,
  Item,
  List,
  Title,
} from './Footer.styled';
import { AiOutlineCopyright } from 'react-icons/ai';
import menu from '../../resources/menu.json';
import { nanoid } from 'nanoid';

export const Footer = () => {
  return (
    <FooterEl>
      <Container>
        <Background>
          <Title>Menu</Title>
          {menu.length > 0 && (
            <List>
              {menu.map(item => (
                <Item key={nanoid()}>
                  <a href={item.id}>{item.title}</a>
                </Item>
              ))}
            </List>
          )}
          <ButtonEl type="button">
            <a href="tel:+54011111111">Booking</a>
          </ButtonEl>
          <Copyright>
            <AiOutlineCopyright
              style={{ color: '#fff', width: '20', height: '20' }}
            />
            <Autors>
              <p>CREATED BY ZEMFIRA ABITOVA</p>
              <p>DESIGNER - </p>
            </Autors>
          </Copyright>
        </Background>
      </Container>
    </FooterEl>
  );
};
