import { Component } from '@angular/core';
import { HEROES } from '../landmark-list/landmarks-mock';

@Component({
  selector: 'app-landmark-list',
  templateUrl: './landmark-list.component.html',
  styleUrls: ['./landmark-list.component.css'],
})

export class LandmarkListComponent {

heroes = HEROES;

}
