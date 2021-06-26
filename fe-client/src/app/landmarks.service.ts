import { Landmark } from './landmark.model';
import { LandmarkMockData } from './landmarks/landmark-list/landmarks-mock';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LandmarksService {
  // private landmarks: Landmark[] = [];
  // private landmarks: Landmark[] = LandmarkMockData;

  // getLandmarks() {
  //   return [...this.landmarks];
  // }

  uri = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getLandmarks() {
    return this.http.get<Landmark[]>(`${this.uri}/api/landmarks`);
  }

  // TODO: add addLandmark method
  // addLandmark() {}
}
