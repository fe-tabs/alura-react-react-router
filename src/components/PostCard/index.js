import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

export default function PostCard({ post }) {
  return(
    <div className={styles['post']}>
      <img
        className={styles['post__cover']}
        src={require(`../../assets/posts/${post.id}/cover.png`)}
        alt={post.title}
      />
      <h2 className={styles['post__title']}>{post.title}</h2>
      <Link to={`/posts/${post.id}`}>
        <button className={styles['post__button']}>Ler</button>
      </Link>
    </div>
  );
}