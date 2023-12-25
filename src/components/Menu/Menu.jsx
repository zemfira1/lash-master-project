import { HeaderNav, Header, ButtonEl } from './Menu.styled';
import sprite from '../../images/symbol-defs.svg';
import { Container } from 'components/Container';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import { ModalMenu } from 'components/ModalMenu';

export const Menu = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Header>
      <Container>
        <HeaderNav>
          <svg width={204} height={40}>
            <use href={sprite + '#icon-logo'}></use>
          </svg>
          <ButtonEl type="button" onClick={toggleModal}>
            <svg width={32} height={16}>
              <use href={sprite + '#icon-menu-burger'}></use>
            </svg>
          </ButtonEl>
          {showModal && (
            <Modal toggleModal={toggleModal}>
              <ModalMenu toggleModal={toggleModal} />
            </Modal>
          )}
        </HeaderNav>
      </Container>
    </Header>
  );
};
