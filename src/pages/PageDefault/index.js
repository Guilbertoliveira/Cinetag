import Cabecalho from "components/Header";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "context/favorite";
import { Outlet } from "react-router-dom";
import styles from './PageDefault.module.css';

export default function PageDefault() {
    return (
        <>
            <Cabecalho></Cabecalho>
            <main className={styles.main}>
                <FavoritosProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritosProvider>
            </main>
            <Rodape />
        </>
    )
}