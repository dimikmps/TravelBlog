import { Landmark } from './landmark.model';
import { LandmarkMockData } from './landmarks/landmark-list/landmarks-mock';

export class LandmarksService {
  // private landmarks: Landmark[] = [];
  private landmarks: Landmark[] = LandmarkMockData;

  getLandmarks() {
    return [...this.landmarks];
  }

  // TODO: add addLandmark method
  // addLandmark() {}
}
