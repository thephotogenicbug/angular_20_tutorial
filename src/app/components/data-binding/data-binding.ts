import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular 20 Tutorial';
  productPrice: number = 12500;

  maxlength: number = 5;
  minChar: number = 3;

  inputType: string = 'checkbox';

  myClassName: string = 'mycolor';

  constructor() {}

  showWelcomeMessage() {
    alert('Hello world');
  }
  changeCourseName() {
    this.courseName = 'DataBinding tutorial';
  }

  onCityChange() {
    alert('City Changed');
  }
}
