import { Menu } from 'components/Menu';
import { Welcome } from 'components/Welcome';

export const App = () => {
  return (
    <>
      <Menu />
      <main>
        <Welcome />
      </main>
      <footer></footer>
    </>
  );
};
