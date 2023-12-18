import { Container } from 'components/Container';
import { AboutArea, Title, Photo, Info, List, Item } from './AboutMe.styled';
import aboutMe from '../../resources/aboutMe.json';
import { nanoid } from 'nanoid';

export const AboutMe = () => {
  return (
    <section>
      <Container>
        <AboutArea>
          <Title>About Me</Title>
          <Photo></Photo>
          <Info>
            {aboutMe.length > 0 && (
              <List>
                {aboutMe.map(item => (
                  <Item key={nanoid()}>{item}</Item>
                ))}
              </List>
            )}
          </Info>
        </AboutArea>
      </Container>
    </section>
  );
};
