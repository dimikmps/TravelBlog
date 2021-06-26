import { Component, OnInit } from '@angular/core';
import { LandmarkMockData } from '../landmark-list/landmarks-mock';
import { Landmark } from '../../landmark.model';
import { LandmarksService } from 'src/app/landmarks.service';

@Component({
  selector: 'app-landmark-list',
  templateUrl: './landmark-list.component.html',
  styleUrls: ['./landmark-list.component.css'],
})

export class LandmarkListComponent implements OnInit {
  // DEBUG
  landmarks: Landmark[] = [];
  // landmarks: Landmark[] = LandmarkMockData;
  // landmarks = LandmarkMockData;

  landmarksService: LandmarksService;

  constructor(landmarksService: LandmarksService) {
    this.landmarksService = landmarksService;
  }

  ngOnInit() {
    this.landmarks = this.landmarksService.getLandmarks();
    console.log("CHECK HERE:", this.landmarks);
  }
}
