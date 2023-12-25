import { Container } from 'components/Container';
import { SubstrateWithLogo } from 'components/SubstrateWithLogo';
import { ButtonEl, List, Title, Link, IconArea, Text } from './Contacts.styled';
import sprite from '../../images/symbol-defs.svg';

export const Contacts = () => {
  return (
    <section id="7">
      <Container>
        <SubstrateWithLogo>
          <Title>Contact me</Title>
          <List>
            <li>
              <ButtonEl>
                <Link href="https://www.instagram.com">
                  <IconArea>
                    <svg width={24} height={24}>
                      <use href={sprite + '#icon-instagram'}></use>
                    </svg>
                  </IconArea>
                  <Text>My Instagram</Text>
                </Link>
              </ButtonEl>
            </li>
            <li>
              <ButtonEl>
                <Link href="tel:+5401111111">
                  <IconArea>
                    <svg width={24} height={24}>
                      <use href={sprite + '#icon-call'}></use>
                    </svg>
                  </IconArea>
                  <Text>+5 401 111 1111</Text>
                </Link>
              </ButtonEl>
            </li>
            <li>
              <ButtonEl>
                <Link href="https://www.waze.com">
                  <IconArea>
                    <svg width={24} height={24}>
                      <use href={sprite + '#icon-map'}></use>
                    </svg>
                  </IconArea>
                  <Text>
                    456 Central St,
                    <br />
                    Vancouver, BC 52473
                  </Text>
                </Link>
              </ButtonEl>
            </li>
          </List>
        </SubstrateWithLogo>
      </Container>
    </section>
  );
};
