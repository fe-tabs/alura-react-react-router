import { Route, Routes, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import posts from 'data/posts.json';
import Article from 'components/Article';
import styles from './Post.module.css';
import NotFound from 'pages/NotFound';
import PageContent from 'components/PageContent';

export default function Post() {
  const params = useParams();
  const post = posts.find(post => post.id == params.id);

if (!post) {
  return <NotFound/>
}

  return(
    <Routes>
      <Route path='*' element={<PageContent/>}>
        <Route index element={
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
        }/>
      </Route>
    </Routes>
  );
}