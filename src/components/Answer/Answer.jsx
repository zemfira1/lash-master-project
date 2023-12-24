import { ButtonEl, Item } from './Answer.styled';
import { Modal } from 'components/Modal';
import { ModalOfAnswers } from 'components/ModalOfAnswers';
import { useState } from 'react';

export const Answer = ({ question, answer }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Item>
      <ButtonEl type="button" onClick={toggleModal}>
        {question}
      </ButtonEl>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <ModalOfAnswers
            toggleModal={toggleModal}
            question={question}
            answer={answer}
          />
        </Modal>
      )}
    </Item>
  );
};
