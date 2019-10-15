import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FilRougeFront';
  images = [
    `/assets/images/home-banner/the-ou-cafe.jpg`,
    `https://picsum.photos/900/500?random&t=${Math.random()}`,
    `https://picsum.photos/900/500?random&t=${Math.random()}`
  ];
}
