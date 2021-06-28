import { Landmark } from '../landmark.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LandmarksService {
  uri = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getLandmarks() {
    return this.http.get<Landmark[]>(`${this.uri}/api/landmarks`);
  }

  getLandmarkById(id: string) {
    return this.http.get<Landmark>(`${this.uri}/api/landmarks/${id}`);
  }
}
