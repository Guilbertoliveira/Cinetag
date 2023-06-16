import Cabecalho from "components/Header";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "context/favoritos";
import { Outlet } from "react-router-dom";
import styles from './PaginaBase.module.css';

export default function PaginaBase() {
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