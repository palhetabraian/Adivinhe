import styles from './app.module.css';
import { useEffect, useState } from 'react';

import { WORDS, Challenge } from './utils/words';

import { Header } from './components/Header';
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { LettersUsed } from './components/LettersUsed';

export default function App() {
  // responsavel pelas tentativas
  const [attempts, setAttempts] = useState(0);

  const [letter, setLetter] = useState('');

  //estado para o desafio
  //comeca nullo(vazio)
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    alert('Reiniciar o jogo!');
  }

  //Funcao para comecar o jogo
  function startGame() {
    // math.floor arredonda um numero
    // Math random gera um numero aleatorio
    const index = Math.floor(Math.random() * WORDS.length);

    //Passando para variavel o valor de WORLDS e passando no metodo de array o index
    const randomWords = WORDS[index];

    //retorna a letra aleatorio quando o componente é renderizado
    setChallenge(randomWords);
    // reseta o jogo para comecar com 0 pontuacao
    setAttempts(0);

    //passando o palpite para comecar com a letra vazia
    setLetter('');
  }

  // usando o useEffect para toda vez que o nosso componente for renderizado ele iniciar o startgame()
  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programacao mais utilizadas!" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="e" />
          <Letter value="a" />
          <Letter value="c" />
          <Letter value="t" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>

        <LettersUsed />
      </main>
    </div>
  );
}
