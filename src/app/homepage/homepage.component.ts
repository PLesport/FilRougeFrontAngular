import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
 images = [
    `/assets/images/home-banner/the-ou-cafe.jpg`,
    `https://picsum.photos/900/500?random&t=${Math.random()}`,
    `https://picsum.photos/900/500?random&t=${Math.random()}`
  ];
  constructor() { }

  ngOnInit() {
  }


}
