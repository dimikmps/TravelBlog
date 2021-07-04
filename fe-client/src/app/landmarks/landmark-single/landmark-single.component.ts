import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Landmark } from '../../landmark.model';
import { LandmarksService } from 'src/app/services/landmarks.service';
import { AuthService } from 'src/app/services/auth.service';
import { latLng, MapOptions, tileLayer, Marker } from 'leaflet';
import * as L from 'leaflet';

// Workaround for non-functioning Leaflet marker shadow
L.Icon.Default.imagePath = '../../assets/files/';

@Component({
  selector: 'app-landmark-single',
  templateUrl: './landmark-single.component.html',
  styleUrls: ['./landmark-single.component.css'],
})
export class LandmarkSingleComponent implements OnInit {
  public landmark!: Landmark;
  public userStatus;
  mapOptions!: MapOptions;

  constructor(
    private landmarksService: LandmarksService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    let location;
    // Get currently selected landmark's id
    const id = this.route.snapshot.params.id;

    this.landmarksService.getLandmarkById(id).subscribe((landmark) => {
      // DEBUG
      // console.log('HOORAH!:', landmark);
      this.landmark = landmark;

      // Initialize the map
      this.initializeMapOptions(landmark.location);
    });

    this.authService.checkUserStatus().subscribe((userStatus) => {
      this.userStatus = userStatus;
    });
  }

  private initializeMapOptions(location) {
    // DEBUG
    // console.log("LOCATION IS:", location);
    if (location) {
      let locationCoords = location.split(',');

      this.mapOptions = {
        center: latLng(locationCoords[1], locationCoords[0]),
        zoom: 12,
        layers: [
          tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors',
          }),
          L.marker([locationCoords[1], locationCoords[0]]),
        ],
      };
    }
  }
}
