import { Component } from '@angular/core';
import { LandmarkMockData } from '../landmark-list/landmarks-mock';
import { Landmark } from '../../landmark.model'


@Component({
  selector: 'app-landmark-list',
  templateUrl: './landmark-list.component.html',
  styleUrls: ['./landmark-list.component.css'],
})

export class LandmarkListComponent {

// landmarks: Landmark[] = [];
landmarks = LandmarkMockData;

}
