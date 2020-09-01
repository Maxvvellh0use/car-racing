interface Props {
    (
        score: number,
        hiScore: number,
        lifes: number,
        speed: number,
        goal: number
    ): void
}

export const ScoreContainer: Props = (score, hiScore, lifes, speed, goal) => {
  const root = document.getElementById('rootScore');
  root.insertAdjacentHTML('beforeend', `
                    <div class="score_container">
                    <div class="score_container__item score">
                        <span>Score: ${score}</span>
                    </div>
                    <div class="score_container__item hi_score">
                        <span>Hi-Score: <br> ${hiScore}</span>
                    </div>
                    <div class="score_container__item lifes">
                        <canvas class="canvas_lifes" 
                                id="canvasLifes" width="90" 
                                height="90"></canvas>
                    </div>
                    <div class="score_container__item speed">
                        <span>Speed: ${speed}</span>
                    </div>
                    <div class="score_container__item goal">
                        <span>Goal: ${goal}/50</span>
                    </div>
                    <div class="sound_icon">
                        <span></span>
                    </div>
                </div>`);
};
