import sprite from '../../images/symbol-defs.svg';
import {
  Info,
  ClouseButton,
  SvgClouse,
  Title,
  Description,
} from './ModalOfAnswers.styled';

export const ModalOfAnswers = ({ toggleModal, question, answer }) => {
  return (
    <Info>
      <ClouseButton onClick={() => toggleModal()}>
        <SvgClouse width={20} height={20}>
          <use href={sprite + '#icon-x'}></use>
        </SvgClouse>
      </ClouseButton>
      <Title>{question}</Title>
      <Description>{answer}</Description>
    </Info>
  );
};
