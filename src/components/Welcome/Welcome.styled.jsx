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
  padding-inline: ${theme.spacing(6)};
  border: none;
  border-radius: ${theme.spacing(7.5)};
  background-color: ${theme.colors.menuBackground};
  background-image: url(${faces});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: ${theme.spacing(17)};
  box-shadow: 0px 0px 8px 0px ${theme.colors.grey1};
`;

export const LogoArea = styled.div`
  padding-top: ${theme.spacing(19)};
`;

export const MouseArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
  align-items: center;
  padding-bottom: ${theme.spacing(6.5)};
`;

export const Mouse = styled.svg`
  cursor: pointer;
  width: ${theme.spacing(16)};
  height: ${theme.spacing(16)};

  transition: width height 200ms linear;

  &:hover {
    width: ${theme.spacing(17)};
    height: ${theme.spacing(17)};
  }
`;

export const ArrowArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Arrow = styled.svg`
  display: block;
  animation: arrow-down 2s infinite;

  :nth-of-type(2) {
    animation-delay: 0.2s;
  }

  :nth-of-type(3) {
    animation-delay: 0.4s;
  }

  @keyframes arrow-down {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
