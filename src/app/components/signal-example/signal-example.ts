import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.html',
  styleUrl: './signal-example.css',
})
export class SignalExample {
  firstName: string = 'Naveen';

  courseName = signal<string>('Angular');

  courseDuration = signal('15 Videos');

  courseDetails = computed(() => this.courseName() + ' - ' + this.courseDuration());

  constructor() {
    this.firstName = 'Naveen Kumar';
    console.log(this.firstName);
    console.log(this.courseName());
    setTimeout(() => {
      this.courseName.set('Angular 20');
    }, 5000);
    console.log(this.courseName());
  }
}
