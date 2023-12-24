import { Container } from 'components/Container';
import { Background, PromotionWrapper } from './Promotion1.styled';
import { PromotionInformation } from 'components/PromotionInformation';

export const Promotion1 = () => {
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
