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

  // Edit landmark details (PUT)
  editLandmark(landmark: Landmark): Observable<Landmark> {
    return this.http.put<Landmark>(
      `${this.uri}/api/landmark/${landmark.objectId}`,
      landmark.title,
      { headers: this.getSessionToken() }
    );
  }

  // Function to get the current user's session token, whenever necessary by the current
  getSessionToken(): HttpHeaders {
    return new HttpHeaders({
      'X-Parse-Session-Token': this.authService.getAuthToken(),
    });
  }
}
