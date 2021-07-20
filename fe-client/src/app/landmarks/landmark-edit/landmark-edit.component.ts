import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Landmark } from '../../landmark.model';
import { LandmarksService } from 'src/app/services/landmarks.service';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';
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
  public photoFile;

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

    if (this.photoFile) {
      this.newLandmark.photoFile = this.photoFile;
    }

    // DEBUG
    // console.log('DEBUG Landmark:', this.newLandmark);

    this.landmarksService.editRouter(this.newLandmark);
  }

  // Sets the photoFile to the file uploaded via the Edit page -> upload button
  uploadTrigger(event) {
    this.photoFile = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(this.photoFile);

    reader.onload = (event: any) => {
      this.landmark.photoThumb.url = event.target.result;
    };

    // DEBUG
    // console.log('This is the retrieved file:', this.photoFile);
  }
}
