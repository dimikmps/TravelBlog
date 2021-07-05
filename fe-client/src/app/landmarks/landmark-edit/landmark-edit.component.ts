import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Landmark } from '../../landmark.model';
import { LandmarksService } from 'src/app/services/landmarks.service';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landmark-edit',
  templateUrl: './landmark-edit.component.html',
  styleUrls: ['./landmark-edit.component.css'],
})
export class LandmarkEditComponent implements OnInit {
  public landmark!: Landmark;
  public userStatus;

  public newLandmark!: Landmark;
  titleValue = '';
  shortInfo = '';
  descriptionValue = '';
  urlValue = '';

  constructor(
    private landmarksService: LandmarksService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Get currently selected landmark's id
    const id = this.route.snapshot.params.id;

    this.landmarksService.getLandmarkById(id).subscribe((landmark) => {
      // DEBUG
      // console.log('HOORAH!:', landmark);
      this.landmark = landmark;
      this.newLandmark = landmark;

      this.titleValue = landmark.title;
      this.shortInfo = landmark.shortInfo;
      this.descriptionValue = landmark.description;
      this.urlValue = landmark.url;
    });

    this.authService.checkUserStatus().subscribe((userStatus) => {
      this.userStatus = userStatus;
    });
  }

  editTrigger(
    title: string,
    shortInfo: string,
    description: string,
    urlValue: string
  ) {
    this.titleValue = title;
    this.shortInfo = shortInfo;
    this.descriptionValue = description;
    this.urlValue = urlValue;

    this.newLandmark.title = this.titleValue;
    this.newLandmark.shortInfo = this.shortInfo;
    this.newLandmark.description = this.descriptionValue;
    this.newLandmark.url = this.urlValue;

    // DEBUG
    // console.log('DEBUG Landmark:', this.newLandmark);

    this.landmarksService.editLandmark(this.newLandmark);

    this.alert_sucess();
  }

  async alert_sucess() {
    swal('Edit Landmark', 'Changes saved succesfully!', 'success');
  }
}
