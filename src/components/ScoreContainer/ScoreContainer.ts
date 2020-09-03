interface Props {
    (
        score: number,
        hiScore: number,
        lifes: number,
        speed: number,
        goal: number,
        soundIcon: string
    ): void
}

export const ScoreContainer: Props = (score, hiScore, lifes, speed, goal, soundIcon) => {
  const root = document.getElementById('rootScore');
  root.insertAdjacentHTML('beforeend', `
                    <div class="score_container">
                    <div class="score_container__item score">
                        <span>Score: <br> ${score}</span>
                    </div>
                    <div class="score_container__item hi_score">
                        <span>Hi-Score: <br> ${hiScore}</span>
                    </div>
                    <div class="score_container__item lifes">
                        <canvas class="canvas_lifes" 
                                id="canvasLifes" width="150" 
                                height="90"></canvas>
                    </div>
                    <div class="score_container__item speed">
                        <span>Speed: ${speed}</span>
                    </div>
                    <div class="score_container__item goal">
                        <span>Goal: ${goal}</span>
                    </div>
                    <div class="score_container__item sound_icon">
                        <img src="${soundIcon}" class="sound_svg" alt="sound icon" id="musicIcon"/>
                    </div>
                </div>`);
};
