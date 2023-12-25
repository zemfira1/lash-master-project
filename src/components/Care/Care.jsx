import { Container } from 'components/Container';
import sprite from '../../images/symbol-defs.svg';
import { CareArea, Title, Logo, List, Item } from './Care.styled';
import care from '../../resources/care.json';
import { nanoid } from 'nanoid';
import { RxDotFilled } from 'react-icons/rx';

export const Care = () => {
  return (
    <section id="4">
      <Container>
        <CareArea>
          <svg width={40} height={40}>
            <use href={sprite + '#icon-magicpen'}></use>
          </svg>
          <Title>How to care for eyelashes</Title>
          {care.length > 0 && (
            <List>
              {care.map(item => (
                <Item key={nanoid()}>
                  <RxDotFilled
                    style={{
                      color: '#000',
                      width: '24',
                      height: '12',
                      paddingTop: '6',
                      paddingLeft: '0',
                    }}
                  />
                  <div>{item}</div>
                </Item>
              ))}
            </List>
          )}
          <Logo width={48} height={58}>
            <use href={sprite + '#icon-logo-za-1'}></use>
          </Logo>
        </CareArea>
      </Container>
    </section>
  );
};
