import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sunset',
      url: 'https://images.unsplash.com/photo-1527556897832-0c6492fa56cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Trees',
      url: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Above the Sea',
      url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fGJlYWNofGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    }
  ];

  onPaginationClick(page) {
    this.currentPage = page;

  }
}
