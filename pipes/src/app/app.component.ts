import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  recieverName = '';
  amount = '';
  date = ''
  onNameChange(value) {
    this.recieverName = value;
  }

  onDateChange(value) {
    this.date = value;
  }

  onAmountChange(value) {
    this.amount = value;
  }
}
