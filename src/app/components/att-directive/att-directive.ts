import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective {
  div1BgClassName = signal<string>('');

  isDiv2Green: boolean = false;

  setBgClass(className: string) {
    this.div1BgClassName.set(className);
  }

  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }
}
