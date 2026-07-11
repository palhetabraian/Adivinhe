import styles from './styles.module.css';

// importando o componente de letter(letras)
import { Letter } from '../Letter';

//criando tipagem pra letra utilizado do usuario
export type LettersUsedProps = {
  value: string;
  correct: boolean;
};

//
type Props = {
  data: LettersUsedProps[];
};

export function LettersUsed({ data }: Props) {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>
      <div>
        {data.map(({ value, correct }) => (
          <Letter
            key={value}
            value={value}
            size="small"
            color={correct ? 'correct' : 'wrong'}
          />
        ))}
      </div>
    </div>
  );
}
