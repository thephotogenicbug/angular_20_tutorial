import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.css',
})
export class ResourceAPI {
  http = inject(HttpClient);

  userData = resource({
    loader: () => {
      return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
    },
  });

  userList = rxResource({
    stream: () => this.http.get<any[]>('https://jsonplaceholder.typicode.com/users'),
  });

  constructor() {
    setTimeout(() => {
      this.userData.reload();
    }, 6000);
  }
}
