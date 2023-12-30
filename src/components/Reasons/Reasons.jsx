import { Container } from 'components/Container';
import reasons from '../../resources/reasons.json';
import { nanoid } from 'nanoid';
import { List, Item } from './Reasons.styled';
import { SubstrateWithLogo } from 'components/SubstrateWithLogo';
import { Title } from 'components/Title';

export const Reasons = () => {
  return (
    <section id="2">
      <Container>
        <SubstrateWithLogo>
          <Title title="You need eyelashes because it is..." />
          {reasons.length > 0 && (
            <List>
              {reasons.map(item => (
                <Item key={nanoid()}>{item}</Item>
              ))}
            </List>
          )}
        </SubstrateWithLogo>
      </Container>
    </section>
  );
};
