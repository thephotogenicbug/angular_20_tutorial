import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];

  ngOnInit(): void {
    // debugger;
    this.getUsers();
  }

  getUsers() {
    // debugger;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      // debugger;
      this.userList = res;
    });
  }
}
