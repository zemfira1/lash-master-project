import { Container } from 'components/Container';
import { PromotionWrapper } from './Promotion2.styled';
import { PromotionInformation } from 'components/PromotionInformation';

export const Promotion2 = () => {
  return (
    <section>
      <Container>
        <PromotionWrapper>
          <PromotionInformation />
        </PromotionWrapper>
      </Container>
    </section>
  );
};
