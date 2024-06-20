import Button from 'components/Button';
import styles from './NotFound.module.css';
import image from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return(
    <>
      <div className={styles['content']}>
        <span className={styles['text__error']}>404</span>
      
        <h1 className={styles['title']}>
          Ops! Página não encontrada.
        </h1>

        <p className={styles['paragraph']}>
          Tem certeza de que era isso que você estava procurando? 
        </p>
        <p className={styles['paragraph']}>
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
        </p>

        <div 
          className={styles['button__container']}
          onClick={() => navigate("/")}
        >
          <Button size={'lg'}>Voltar</Button>
        </div>

        <img 
          className={styles['image']} 
          src={image} 
          alt='Cachorro de óculos e vestido como humano'
        />
      </div>

      <div className={styles['gap']}></div>
    </>
  );
}