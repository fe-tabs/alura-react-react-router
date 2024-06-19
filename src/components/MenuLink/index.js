import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({
  path,
  children
}) {
  const location = useLocation();

  return(
    <Link 
      className={`
        ${styles['menu__link']} 
        ${location.pathname === path && styles['menu__link--active']}`
      } 
      to={path}
    >
      {children}
    </Link>
  );
}