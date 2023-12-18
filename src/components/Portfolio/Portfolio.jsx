import { Container } from 'components/Container';
import {
  Photos,
  PortfolioArea,
  Title,
  Image,
  Photo,
  Icon,
} from './Portfolio.styled';
import photo1 from '../../images/photo-1.jpg';
import photo2 from '../../images/photo-2.jpg';
import photo3 from '../../images/photo-3.jpg';
import sprite from '../../images/symbol-defs.svg';

export const Portfolio = () => {
  return (
    <section>
      <Container>
        <PortfolioArea>
          <Title>My Portfolio</Title>
          <Photos>
            <Photo>
              <Image src={photo1} alt="lashes" />
            </Photo>
            <Photo>
              <Image src={photo2} alt="lashes" />
            </Photo>
            <Photo>
              <Image src={photo3} alt="lashes" />
            </Photo>
          </Photos>
          <Icon width={49} height={58}>
            <use href={sprite + '#icon-logoZA'}></use>
          </Icon>
        </PortfolioArea>
      </Container>
    </section>
  );
};
