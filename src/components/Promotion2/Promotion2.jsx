import { Container } from 'components/Container';
import { PromotionWrapper, Background } from './Promotion2.styled';
import { PromotionInformation } from 'components/PromotionInformation';

export const Promotion2 = () => {
  return (
    <section>
      <Container>
        <PromotionWrapper>
          <Background>
            <PromotionInformation />
          </Background>
        </PromotionWrapper>
      </Container>
    </section>
  );
};
