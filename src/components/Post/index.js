import styles from './Post.module.css';

export default function Post({ post }) {
  return(
    <div className={styles['post']}>
      <img
        className={styles['post__cover']}
        src={require(`../../assets/posts/${post.id}/cover.png`)}
        alt={post.title}
      />
      <h2 className={styles['post__title']}>{post.title}</h2>
      <button className={styles['post__button']}>Ler</button>
    </div>
  );
}