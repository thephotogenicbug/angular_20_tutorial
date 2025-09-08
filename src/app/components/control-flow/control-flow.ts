import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParaVisible: boolean = false;

  cityList: string[] = ['pune', 'mumbia', 'bangalore', 'nagpur'];

  studentList: any[] = [
    { name: 'AAA', city: 'Bangalore', isActive: false },
    { name: 'BBB', city: 'Chennai', isActive: false },
    { name: 'CCC', city: 'Andra pradesh', isActive: true },
    { name: 'DDD', city: 'Kerala', isActive: false },
  ];

  showPara() {
    this.isParaVisible = true;
  }
  hidePara() {
    this.isParaVisible = false;
  }
}
