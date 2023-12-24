import { AboutMe } from 'components/AboutMe/AboutMe';
import { Care } from 'components/Care';
import { Menu } from 'components/Menu';
import { Portfolio } from 'components/Portfolio';
import { Promotion1 } from 'components/Promotion1';
import { Promotion2 } from 'components/Promotion2';
import { Questions } from 'components/Questions';
import { Reasons } from 'components/Reasons';
import { Welcome } from 'components/Welcome';

export const App = () => {
  return (
    <>
      <Menu />
      <main>
        <Welcome />
        <AboutMe />
        <Reasons />
        <Promotion1 />
        <Portfolio />
        <Care />
        <Promotion2 />
        <Questions />
      </main>
      <footer></footer>
    </>
  );
};
