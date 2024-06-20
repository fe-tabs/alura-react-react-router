import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import posts from 'data/posts.json';
import Article from 'components/Article';
import styles from './Post.module.css';

export default function Post() {
  const params = useParams();
  const post = posts.find(post => post.id == params.id);

  return(
    <Article
      cover={require(`../../assets/posts/${post.id}/cover.png`)}
      title={post.title}
    >
      <div className={styles['post__markdown__container']}>
        <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
      </div>
    </Article>
  );
}