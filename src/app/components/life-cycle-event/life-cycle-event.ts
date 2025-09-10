import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-event',
  imports: [],
  templateUrl: './life-cycle-event.html',
  styleUrl: './life-cycle-event.css',
})
export class LifeCycleEvent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInt');

    // to trigger api calls
    // to subscribe
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    // to deal with viewChild
    // to subscribe
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    // to unsubscribe
    // to restrict user from navigating
  }
}
