import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fe-client';

  slides = [
    // {
    //   image: '../assets/files/slider/1.jpg',
    // },
    // {
    //   image: '../assets/files/slider/2.jpg',
    // },
    // {
    //   image: '../assets/files/slider/3.jpg',
    // },
    // {
    //   image: '../assets/files/slider/4.jpg',
    // },
    {
      image: '../assets/files/slider/5.jpg',
    },
    {
      image: '../assets/files/slider/11.jpg',
    },
    {
      image: '../assets/files/slider/22.png',
    },
  ];
}
