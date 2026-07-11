import styles from './app.module.css';
import { useEffect, useState } from 'react';

import { WORDS, Challenge } from './utils/words';

import { Header } from './components/Header';
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { LettersUsed, LettersUsedProps } from './components/LettersUsed';

export default function App() {
  // responsavel por quantos acertos
  const [score, setScore] = useState(0);

  //estado das letras
  const [letter, setLetter] = useState('');

  //criando letra utilizada pelo usuario
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);

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
    setScore(0);

    //passando o palpite para comecar com a letra vazia
    setLetter('');

    setLettersUsed([]);
  }

  //Funcao responsavel pelo botao de confirmar
  function handleConfirm() {
    //verifica se existe o desafio
    if (!challenge) {
      return;
    }

    // se o usuario nao digitar exibe alerta
    if (!letter.trim()) {
      return alert('Digite uma letra');
    }

    //recupera o que o usuario digitou
    const value = letter.toUpperCase();
    // procura na lista de letras utilizadas para verificar se essa letra já foi informada anteriormente
    const exist = lettersUsed.find(
      (used) => used.value.toUpperCase() === value
    );

    //verifica se o usuario ja utilizou a letra
    if (exist) {
      return alert('Voce ja utilizou a letra ' + value);
    }

    //cria os acertos
    const hits = challenge.word
      .toLocaleUpperCase()
      .split('')
      .filter((char) => char === value).length;

    //cria os acertos
    const correct = hits > 0;
    //score dos acertos
    const currentScore = score + hits;

    // mantem as letras ja utilizadas e adiciona uma nova
    setLettersUsed((prevState) => [...prevState, { value, correct }]);
    setScore(currentScore);

    setLetter('');
  }

  // usando o useEffect para toda vez que o nosso componente for renderizado ele iniciar o startgame()
  useEffect(() => {
    startGame();
  }, []);

  //verifica se existe o desafio
  if (!challenge) {
    return;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={score} max={10} onRestart={handleRestartGame} />
        <Tip tip={challenge.tip} />
        <div className={styles.word}>
          {/* Divide o array em diversos e mapeia cada componente*/}
          {challenge.word.split('').map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) =>
                used.value.toLocaleUpperCase() === letter.toLocaleUpperCase()
            );
            return (
              <Letter
                key={index}
                value={letterUsed?.value}
                color={letterUsed?.correct ? 'correct' : 'default'}
              />
            );
          })}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}
