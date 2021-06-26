import { Component } from '@angular/core';

@Component({
  selector: 'app-landmark-create',
  templateUrl: './landmark-create.component.html',
  styleUrls: ['./landmark-create.component.css'],
})
export class LandmarkCreateComponent {
  newLandmarkTitle = '';
  newLandmarkDescription = '';
  newLandmarkCoords = '';
  newLandmarkUrl = '';
  landmarkTitle = 'Please add your landmark title here...';
  landmarkDescription = 'Please add your landmark description here...';
  landmarkCoords = 'Please add your landmark coordinates here...';
  landmarkUrl = 'Please add your landmark URL here...';
  valueUpdated = false;

  onAddLandmark() {
    if (this.newLandmarkTitle !== '') {
      this.landmarkTitle = this.newLandmarkTitle;
      this.valueUpdated = true;
    }

    if (this.newLandmarkDescription !== '') {
      this.landmarkDescription = this.newLandmarkDescription;
      this.valueUpdated = true;
    }

    if (this.newLandmarkCoords !== '') {
      this.landmarkCoords = this.newLandmarkCoords;
      this.valueUpdated = true;
    }

    if (this.newLandmarkUrl !== '') {
      this.landmarkUrl = this.newLandmarkUrl;
      this.valueUpdated = true;
    }

    if (this.valueUpdated === true) alert('Landmark succesfully submitted!');
    else alert('No information provided ...');
  }
}
