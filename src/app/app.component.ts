import { Component } from '@angular/core';
import { Dice } from './model/Dice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'blood-bowl-second-edition-star-players';
  Die = Dice.D66;
}
