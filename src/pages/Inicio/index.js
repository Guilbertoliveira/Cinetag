import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Inicio.module.css';
import videos from 'json/db.json';
import Banner from 'components/Banner';

export default function Inicio() {
  console.log(videos);
  return (
    <>
      <Banner imagem="home"></Banner>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((item) => (
          <Card {...item} key={item.id}></Card>
        ))}
        <Card
          id="1"
          titulo="Gato bonifacio"
          capa="https://thecatapi.com/api/images/get?format-src&type=png"
        />{' '}
      </section>
    </>
  );
}
