import Card from 'components/Card';
import Title from 'components/Title';
import styles from './Home.module.css';
import Banner from 'components/Banner';
import { useEffect, useState } from 'react';

export default function Home({ banner }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/videos');
      const data = await response.json();
      setVideos(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Banner imagem={banner}></Banner>
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((item) => (
          <Card {...item} key={item.id}></Card>
        ))}
      </section>
    </>
  );
}
