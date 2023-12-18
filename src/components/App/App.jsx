import { AboutMe } from 'components/AboutMe/AboutMe';
import { Care } from 'components/Care';
import { Menu } from 'components/Menu';
import { Promotion1 } from 'components/Promotion1';
import { Promotion2 } from 'components/Promotion2';
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
        <Care />
        <Promotion2 />
      </main>
      <footer></footer>
    </>
  );
};