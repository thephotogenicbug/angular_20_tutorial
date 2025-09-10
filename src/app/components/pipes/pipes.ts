import {
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  firstName: string = 'Naveen';
  courseName: string = 'Angular 20 Tutorial';

  rollNoList = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  studentObj: any = {
    name: 'Naveen',
    city: 'Bangalore',
  };

  currentData: Date = new Date();
}
