import {
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../components/custom-pipes/na-pipe';

@Component({
  selector: 'app-pipes-new',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, JsonPipe, NaPipe],
  templateUrl: './pipes-new.html',
  styleUrl: './pipes-new.css',
})
export class PipesNew {
  courseName = 'Angular 20 Tutorial';

  currentDate: Date = new Date();

  rollNoList: Number[] = [111, 112, 113, 114, 115];

  studentObj: any = {
    name: 'Naveen',
    mobile: '999999999',
    address: {
      city: 'Bengaluru',
      state: 'KA',
    },
  };
}
