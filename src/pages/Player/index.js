import Banner from 'components/Banner'
import styles from './Player.module.css'
import Title from 'components/Title'
import { useParams } from 'react-router-dom'
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';


export default function Player() {
    const [video, setVideo] = useState([]);
    const parameters = useParams(); //get the parameter from the url

    useEffect(() => {
        fetch(`http://localhost:3000/videos?id=${parameters.id}`).then(resposta => resposta.json()).then(date => {
            setVideo(...date)
        })
    }, [parameters.id]);

    if (!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner imagem="player" />
            <Title><h1>Player</h1></Title>
            <section className={styles.container}>
                <iframe src={video.link} title={video.Title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </section>

        </>
    )
}