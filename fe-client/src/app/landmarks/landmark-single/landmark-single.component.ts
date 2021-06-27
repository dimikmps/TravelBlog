import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Landmark } from '../../landmark.model';
import { LandmarksService } from 'src/app/landmarks.service';


@Component({
  selector: 'app-landmark-single',
  templateUrl: './landmark-single.component.html',
  styleUrls: ['./landmark-single.component.css'],
})
export class LandmarkSingleComponent implements OnInit {
  public landmark!: Landmark;

  constructor(private landmarksService: LandmarksService, private route: ActivatedRoute) {}

  ngOnInit() {
    // DEBUG
    // const id = "61ssoI39wy";
    const id = this.route.snapshot.params.id

    this.landmarksService.getLandmarkById(id).subscribe((landmark) => {
      // DEBUG
      // console.log('HOORAH!:', landmark);
      this.landmark = landmark;
    });
  }
}
