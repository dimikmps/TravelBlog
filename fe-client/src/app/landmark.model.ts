export interface Landmark {
  objectId: string;
  title: string;
  shortInfo: string;
  description: string;
  location: {
    latitude: Number,
    longitude: Number
  };
  url: string;
  photo: {
      url: string
  };
  photoThumb: {
      url: string
  };
  photoFile
}

