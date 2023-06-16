import Banner from 'components/Banner';
import styles from './Favorite.module.css';
import Title from 'components/Title';
import Card from 'components/Card';
import { useFavoriteContext } from 'context/favorite';

export default function Favorite({ banner }) {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Banner imagem={banner}></Banner>
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((cardItem) => (
          <Card {...cardItem} key={cardItem.id} />
        ))}
      </section>
    </>
  );
}
