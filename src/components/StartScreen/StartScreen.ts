import { InitGame } from '../InitGame/InitGame';



export const StartScreen = () => {
  const startScreenRoot = document.getElementById('startScreenRoot');
  startScreenRoot.insertAdjacentHTML('afterbegin', `
        <div class="start_title">Car Racing</div>
        <div class="start_button" id="startButton">Start Game</div>
    `);
  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', InitGame);
};
