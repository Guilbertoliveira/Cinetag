import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import { useFavoritoContext } from 'contextos/favoritos';

export default function Favoritos({ banner }) {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Banner imagem={banner}></Banner>
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((cardItem) => (
          <Card {...cardItem} key={cardItem.id} />
        ))}
      </section>
    </>
  );
}
