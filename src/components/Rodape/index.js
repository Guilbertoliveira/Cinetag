import styles from './Rodape.module.css';
import baseboard from './baseboard.png';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>


      <h2>Desenvolvido por Guilbert.</h2>
      <img src={baseboard} width={40} alt='imagem de uma pipoca' />
    </footer>
  );
}
