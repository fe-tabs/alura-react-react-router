import styles from './Button.module.css';

export default function Button({ size, children }) {
  return(
    <button 
      className={`
        ${styles['button']} 
        ${styles[size]}
      `}
    >
      {children}
    </button>
  );
}