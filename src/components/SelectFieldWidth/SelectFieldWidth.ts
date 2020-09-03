import { InitGame } from '../InitGame/InitGame';

export const SelectFieldWidth = () => {
  const startScreen = document.getElementById('startScreenRoot');
  startScreen.innerHTML = '';
  startScreen.insertAdjacentHTML('beforeend', `
                                    <div class="title_field_select">Select the field width:</div>    
                                    <ul class="field_width_select_list">
                                        <li class="field_width_select_list__item" id="narrowFieldItem">
                                        <span>Narrow</span></li>
                                        <li class="field_width_select_list__item" id="wideFieldItem">
                                        <span>Wide</span></li>
                                    </ul>`);
  const narrowFieldItem = document.getElementById('narrowFieldItem');
  const wideFieldItem = document.getElementById('wideFieldItem');
  narrowFieldItem.addEventListener('click', () => InitGame('narrow'));
  wideFieldItem.addEventListener('click', () => InitGame('wide'));
};
