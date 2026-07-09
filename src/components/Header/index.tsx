import styles from './styles.module.css';
import logo from '../../assets/logo.png';

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />
    </div>
  );
}
