import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  userList: any[] = [];

  userObject: any = {
    userId: 0,
    emailId: '',
    password: '',
    fullName: '',
    mobileNo: '',
  };

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe((res: any) => {
        this.userList = res;
      });
  }

  onSaveUser() {
    this.http
      .post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObject)
      .subscribe({
        next: (res) => {
          alert('User created');
          this.getUsers();
        },
        error: (error) => {
          alert('Error: ' + error);
        },
      });
  }
}
