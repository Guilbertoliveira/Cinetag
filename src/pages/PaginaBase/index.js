import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/favoritos";
import { Outlet } from "react-router-dom";
import styles from './PaginaBase.module.css'

export default function PaginaBase() {
    return (
        <>
            <header>
                <Cabecalho></Cabecalho>
            </header>
            <main className={styles.main}>
                <FavoritosProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritosProvider>
            </main>
            <footer>
                <Rodape />
            </footer>
        </>
    )
}