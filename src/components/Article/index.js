import styles from './Article.module.css';

export default function Article({ cover, title, children }) {
  
  return(
    <article className={styles['article']}>
      <div className={styles['article__cover']}>
        <img className={styles['article__cover__image']} src={cover}/>
      </div>

      <h2 className={styles['article__title']}>{title}</h2>
    
      <div className={styles['article__content']}>{children}</div>
    </article>
  );
}