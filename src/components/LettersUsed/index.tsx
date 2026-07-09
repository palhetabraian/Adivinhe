import styles from './styles.module.css';

// importando o componente de letter(letras)
import { Letter } from '../Letter';

export function LetterUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>
      <div>
        <Letter value="s" size="small" />
        <Letter value="s" size="small" />
      </div>
    </div>
  );
}
