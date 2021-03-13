import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  inputLength = 0;
  buttonEnabled = this.inputLength > 0 && (this.includeNumbers || this.includeLetters || this.includeSymbols);
  onChangeUseNumers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    const numSet = "123456789";
    const symbolSet = "!@#$%^&*()";
    const letterSet = "abcdefghijklmnopqrstuvwxyz";
    let validChars = '';
    if (this.includeLetters) {
      validChars += letterSet;
    }
    if (this.includeSymbols) {
      validChars += symbolSet;
    }
    if (this.includeNumbers) {
      validChars += numSet;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.inputLength; i++) {
      let index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeLength(event) {
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue))
      this.inputLength = parsedValue;
  }
}
