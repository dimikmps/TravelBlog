import { Landmark } from '../landmark.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandmarksService {
  uri = 'http://localhost:5000';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Get all landmarks
  getLandmarks() {
    return this.http.get<Landmark[]>(`${this.uri}/api/landmarks`);
  }

  // Get landmark by id
  getLandmarkById(id: string) {
    return this.http.get<Landmark>(`${this.uri}/api/landmarks/${id}`);
  }

  editRouter(landmark: Landmark) {
    if (!landmark.photoFile) {
      // DEBUG
      console.log('No file uploaded. API v.1.0.1');

      let body = {
        objectId: landmark.objectId.toString(),
        title: landmark.title.toString(),
        shortInfo: landmark.shortInfo.toString(),
        description: landmark.description.toString(),
        url: landmark.url.toString(),
      };

      return this.http
        .put<Landmark>(`${this.uri}/api/landmark`, body, {
          headers: this.getSessionToken(),
        })
        .subscribe(
          (response) => response,
          (error) => console.log(error)
        );
    } else {
      // DEBUG
      console.log('File upload detected. API v.1.0.2');

      const formData = new FormData();

      formData.append('objectId', landmark.objectId);
      formData.append('file', landmark.photoFile);
      formData.append('title', landmark.title);
      formData.append('shortInfo', landmark.shortInfo);
      formData.append('description', landmark.description);
      formData.append('url', landmark.url);

      return this.http
        .put<Landmark>(`${this.uri}/api/photo`, formData, {
          headers: this.getSessionToken(),
        })
        .subscribe(
          (response) => response,
          (error) => console.log(error)
        );
    }
  }

  // Function to get the current user's session token, whenever necessary by the current
  getSessionToken(): HttpHeaders {
    // DEBUG
    // console.log('HERE NOW?', this.authService.getAuthToken());

    return new HttpHeaders({
      'X-Parse-Session-Token': this.authService.getAuthToken(),
    });
  }
}
