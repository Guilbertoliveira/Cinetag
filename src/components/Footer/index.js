import styles from './Footer.module.css';
import baseboard from './baseboard.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Desenvolvido por Guilbert.</h2>
      <img src={baseboard} width={40} alt="imagem de uma pipoca" />
    </footer>
  );
}
