import { InitGame } from '../InitGame/InitGame';

const root = document.getElementById('root');

export const StartScreen = () => {
  const startGame = () => InitGame();
  root.insertAdjacentHTML('afterbegin', `
    <div class="start_button_container" id="startScreen">
        <button class="start_button" id="startButton">Start Game</button>
    </div>
    `);
  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', startGame);
};
