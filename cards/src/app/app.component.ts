import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      imageUrl: 'assets/tree.jpeg',
      title: 'nature',
      content: 'Tree',
      userName: '@nature',
    },
    {
      imageUrl: 'assets/mountain.jpeg',
      title: 'mountain',
      content: 'Mountain View',
      userName: '@mountain',
    },
    {
      imageUrl: 'assets/biking.jpeg',
      title: 'biking',
      content: 'Bike',
      userName: '@bike',
    }
  ];
}
