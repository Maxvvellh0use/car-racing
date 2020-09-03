import { InitGame } from '../InitGame/InitGame';

interface Props {
    (
        score: number,
        fieldWidth: string
    ): void
}

export const GameOverScreen: Props = (score, fieldWidth) => {
  const gameOverRoot = document.getElementById('gameOverRoot');
  const rootScore = document.getElementById('rootScore');
  const gameRoot = document.getElementById('root');
  const buttonsMoveRoot = document.getElementById('buttonsMoveRoot');
  gameOverRoot.classList.remove('hidden');
  buttonsMoveRoot.classList.add('hidden');
  rootScore.classList.add('hidden');
  gameRoot.classList.add('hidden');
  gameOverRoot.insertAdjacentHTML('beforeend', `
                        <div class="game_over__title">GAME OVER</div>
                        <div class="game_over__total_score">Total score: ${score}</div>
                        <div class="game_over__try_again" id="tryAgainButton">Try again</div>`);
  const tryAgainButton = document.getElementById('tryAgainButton');
  tryAgainButton.addEventListener('click', () => {
    gameRoot.innerHTML = '';
    gameOverRoot.classList.add('hidden');
    gameOverRoot.innerHTML = '';
    buttonsMoveRoot.classList.remove('hidden');
    rootScore.classList.remove('hidden');
    gameRoot.classList.remove('hidden');
    InitGame(fieldWidth);
  });
};
