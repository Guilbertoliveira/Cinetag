import Header from 'components/Header';
import Container from 'components/Container';
import Footer from 'components/Footer';
import FavoriteProvider from 'context/favorite';
import { Outlet } from 'react-router-dom';
import styles from './PageDefault.module.css';

export default function PageDefault() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <FavoriteProvider>
          <Container>
            <Outlet />
          </Container>
        </FavoriteProvider>
      </main>
      <Footer />
    </>
  );
}
