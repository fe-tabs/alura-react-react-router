import styles from './Banner.module.css';

export default function Banner() {
  return(
    <div className={styles['banner']}>
      <div className={styles['banner__presentation']}>
        <h1 className={styles['presentation__title']}>Olá, Mundo!</h1>

        <p className={styles['presentation__paragraph']}>
          Boas vindas ao meu espaço pessoal! Eu sou Fernanda dos Santos, estudante de Desenvolvimento Web Front-End.
        </p>
      </div>

      <div className={styles['banner__images']}>
        <div className={styles['images__gradient']}></div>
        <img 
          className={styles['images__profile']} 
          src='https://github.com/fe-tabs.png' 
          alt='Fernanda dos Santos'
        />
      </div>
    </div>
  );
}