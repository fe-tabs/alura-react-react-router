import styles from './AboutMe.module.css';
import cover from 'assets/cover-about-me.png';
import Article from "components/Article";

export default function AboutMe() {
  return(
    <Article
      cover={cover}
      title="Sobre mim"
    >
      <h3 className={styles['subtitle']}>
        Olá, eu sou a Fernanda!
      </h3>

      <img
        className={styles['picture']}
        src='https://github.com/fe-tabs.png'
        alt='Fernanda dos Santos'
      />

      <p className={styles['paragraph']}>
        Oi, tudo bem? Me chamo Fernanda, tenho 20 anos e estudo Desenvolvimento Web. Participo de alguns programas como Bolsa Jovem, Geração Tech e Oracle Next Education para desenvolver meus conhecimentos. Almejo ser Dev Front-End.
      </p>
      <p className={styles['paragraph']}>
        Sou natural de Itapipoca mas vivo em Fortaleza desde pequena. Atualmente moro com minha mãe e minha gata Pitomba.
      </p>
    </Article>
  );
}