import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Landmark } from '../../landmark.model';
import { LandmarksService } from 'src/app/services/landmarks.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landmark-single',
  templateUrl: './landmark-single.component.html',
  styleUrls: ['./landmark-single.component.css'],
})
export class LandmarkSingleComponent implements OnInit {
  public landmark!: Landmark;
  public userStatus;

  constructor(
    private landmarksService: LandmarksService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Get currently selected landmark's id
    const id = this.route.snapshot.params.id;

    this.landmarksService.getLandmarkById(id).subscribe((landmark) => {
      // DEBUG
      // console.log('HOORAH!:', landmark);
      this.landmark = landmark;
    });

    this.authService.checkUserStatus().subscribe((userStatus) => {
      this.userStatus = userStatus;
    });
  }
}
