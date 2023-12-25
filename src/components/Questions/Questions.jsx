import { Container } from 'components/Container';
import {
  Icon,
  QuestionsArea,
  Title,
  List,
  Attention,
} from './Questions.styled';
import sprite from '../../images/symbol-defs.svg';
import questions from '../../resources/questions.json';
import { nanoid } from 'nanoid';
import { Answer } from 'components/Answer';

export const Questions = () => {
  return (
    <section id="5">
      <Container>
        <QuestionsArea>
          <Title>Your questions about eyelashes:</Title>
          <Attention>click on the question to get the answer</Attention>
          {questions.length > 0 && (
            <List>
              {questions.map(item => (
                <Answer
                  key={nanoid()}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </List>
          )}
          <Icon width={49} height={58}>
            <use href={sprite + '#icon-logoZA'}></use>
          </Icon>
        </QuestionsArea>
      </Container>
    </section>
  );
};
