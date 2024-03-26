import { Component } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent {
  display: string = '';

  appendToDisplay(value: string) {
    this.display += value;
  }

  clearDisplay() {
    this.display = '';
  }

  calculateResult() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }
  result = this.display
}
