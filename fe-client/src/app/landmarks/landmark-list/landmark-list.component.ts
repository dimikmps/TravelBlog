import { Component, OnInit } from '@angular/core';
import { Landmark } from '../../landmark.model';
import { LandmarksService } from 'src/app/landmarks.service';

@Component({
  selector: 'app-landmark-list',
  templateUrl: './landmark-list.component.html',
  styleUrls: ['./landmark-list.component.css'],
})
export class LandmarkListComponent implements OnInit {
  public landmarks: Landmark[] = [];

  constructor(private landmarksService: LandmarksService) {}

  ngOnInit() {
    this.landmarksService.getLandmarks().subscribe((landmarks) => {
      // DEBUG
      // console.log('HOORAH!:', landmarks);
      this.landmarks = landmarks;
    });
  }
}
