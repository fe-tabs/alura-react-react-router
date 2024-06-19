import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

export default function Menu() {

  return(
    <header>
      <nav className={styles['menu']}>
        <MenuLink path="/">
          Início
        </MenuLink>
        <MenuLink path="/about-me">
          Sobre Mim
        </MenuLink>
      </nav>
    </header>
  );
}