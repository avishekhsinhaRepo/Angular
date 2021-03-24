import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private intervalSubscriber: Subscription;
  constructor() { }

  ngOnInit() {
    this.intervalSubscriber = interval(2000).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }

}
