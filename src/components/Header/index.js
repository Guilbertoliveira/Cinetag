import { Link } from 'react-router-dom';
import logo from './logo.png';
import styles from './Header.module.css';
import CabecalhoLink from 'components/CabecalhoLink';

export default function Cabecalho() {
  return (
    <>
      <header className={styles.cabecalho}>
        <Link to="./">
          <img
            src={logo}
            alt="logo do cinetag"
            className={styles.imgLink}
          ></img>
        </Link>
        <nav>
          <CabecalhoLink url="./">Home</CabecalhoLink>
          <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
        </nav>
      </header>
    </>
  );
}
