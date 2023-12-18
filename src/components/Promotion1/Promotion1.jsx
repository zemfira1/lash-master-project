import { Container } from 'components/Container';
import { PromotionWrapper } from './Promotion1.styled';
import { PromotionInformation } from 'components/PromotionInformation';

export const Promotion1 = () => {
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
