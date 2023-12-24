import {
  Info,
  LogoBottom,
  LogoTop,
  Substrate,
} from './SubstrateWithLogo.styled';
import sprite from '../../images/symbol-defs.svg';

export const SubstrateWithLogo = ({ children }) => {
  return (
    <Substrate>
      <LogoTop width={288} height={326}>
        <use href={sprite + '#icon-logo-za'}></use>
      </LogoTop>
      <LogoBottom width={288} height={326}>
        <use href={sprite + '#icon-logo-za'}></use>
      </LogoBottom>
      <Info>{children}</Info>
    </Substrate>
  );
};
