import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import { useEffect, useState } from 'react';

export default function Inicio({ banner }) {


  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/videos');
      const data = await response.json();
      setVideos(data)
    };

    fetchData()
  }, []);

  return (
    <>
      <Banner imagem={banner}></Banner>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((item) => (
          <Card {...item} key={item.id}></Card>
        ))}
      </section>
    </>
  );
}
