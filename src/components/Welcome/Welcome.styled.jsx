import styled from '@emotion/styled';
import { theme } from 'styles';
import faces from '../../images/two-faces.png';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: ${theme.spacing(166)};
  /* padding-top: ${theme.spacing(14)};
  padding-bottom: ${theme.spacing(7)}; */
  padding-inline: ${theme.spacing(6)};
  border: none;
  border-radius: ${theme.spacing(7.5)};
  background-color: ${theme.colors.menuBackground};
  background-image: url(${faces});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: ${theme.spacing(17)};
`;

export const MouseArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
  align-items: center;
`;

export const ArrowArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Arrow = styled.svg`
  display: block;
  animation: arrow-down 2s infinite;

  :nth-child(2) {
    animation-delay: -0.2s;
  }

  :nth-child(3) {
    animation-delay: -0.4s;
  }

  @keyframes arrow-down {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-10px, -10px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(10px, 10px);
    }
  }
`;
