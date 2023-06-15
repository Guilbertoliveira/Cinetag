import Banner from 'components/Banner'
import styles from './Player.module.css'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import videos from 'json/db.json';
import NaoEncontrada from 'pages/NaoEncontrada';


export default function Player() {
    const parametros = useParams(); //pega o parametro que está na url
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })

    if (!video) {
        return <NaoEncontrada />
    }

    console.log(video);
    return (
        <>
            <Banner imagem="player" />
            <Titulo><h1>Player</h1></Titulo>
            <section className={styles.container}>
                <iframe src={video.link} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>

        </>
    )
}