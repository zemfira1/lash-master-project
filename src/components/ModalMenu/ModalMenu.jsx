import sprite from '../../images/symbol-defs.svg';
import {
  ClouseButton,
  ModalMenuArea,
  SvgClouse,
  IconsArea,
  List,
  Item,
  ButtonEl,
  ButtonArea,
} from './ModalMenu.styled';
import menu from '../../resources/menu.json';
import { nanoid } from 'nanoid';

export const ModalMenu = ({ toggleModal }) => {
  return (
    <ModalMenuArea>
      <IconsArea>
        <svg width={204} height={40}>
          <use href={sprite + '#icon-logo'}></use>
        </svg>
        <ClouseButton type="button" onClick={() => toggleModal()}>
          <SvgClouse>
            <use href={sprite + '#icon-x'}></use>
          </SvgClouse>
        </ClouseButton>
      </IconsArea>
      {menu.length > 0 && (
        <List>
          {menu.map(item => (
            <Item key={nanoid()}>
              <a href={item.id} onClick={() => toggleModal()}>
                {item.title}
              </a>
            </Item>
          ))}
        </List>
      )}
      <ButtonArea>
        <ButtonEl type="button">
          <a href="tel:+54011111111">Booking</a>
        </ButtonEl>
      </ButtonArea>
    </ModalMenuArea>
  );
};
