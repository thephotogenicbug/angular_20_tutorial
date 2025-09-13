import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MasterService } from '../services/master-service';

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

  masterService = inject(MasterService);

  // constructor(private master: MasterService){}

  ngOnInit(): void {
    this.getUsers();

    const result = this.masterService.getSum(12, 50);
  }

  getUsers() {
    // this.http
    //   .get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
    //   .subscribe((res: any) => {
    //     this.userList = res;
    //   });

    this.masterService.getUser().subscribe((res: any) => {
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
          alert('Error: ' + error.error);
        },
      });
  }

  onEdit(item: any) {
    this.userObject = item;
  }
  onUpdateUser() {
    this.userObject.createdDate = new Date();
    this.http
      .put(
        'https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' + this.userObject.userId,
        this.userObject
      )
      .subscribe({
        next: () => {
          alert('Updated user');
          this.getUsers();
        },
        error: (error) => {
          alert('Error: ' + error.error);
        },
      });
  }

  onDelete(id: any) {
    this.http
      .delete('https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=' + id)
      .subscribe({
        next: () => {
          alert('Deleted user');
          this.getUsers();
        },
        error: (error) => {
          alert('Error: ' + error.error);
        },
      });
  }
  onReset() {
    this.userObject = {
      userId: 0,
      emailId: '',
      password: '',
      fullName: '',
      mobileNo: '',
    };
  }
}
