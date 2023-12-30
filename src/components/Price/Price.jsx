import { Container } from 'components/Container';
import { SubstrateWithLogo } from 'components/SubstrateWithLogo';
import { Title } from 'components/Title';
import price from '../../resources/price.json';
import { nanoid } from 'nanoid';
import { Procedure } from 'components/Procedure';
import { List } from './Price.styled';

export const Price = () => {
  return (
    <section id="6">
      <Container>
        <SubstrateWithLogo>
          <Title title="Choose your procedure" />
          {price && price.length > 0 && (
            <List>
              {price.map(item => (
                <Procedure
                  key={nanoid()}
                  procedure={item.procedure}
                  popularity={item.popularity}
                  type={item.type}
                  weeks={item.weeks}
                  description={item.description}
                  price={item.price}
                ></Procedure>
              ))}
            </List>
          )}
        </SubstrateWithLogo>
      </Container>
    </section>
  );
};
