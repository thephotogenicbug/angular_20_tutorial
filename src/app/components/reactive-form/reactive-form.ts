import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm implements OnInit {
  userList: any[] = [];

  userForm = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    fullName: new FormControl(''),
    mobileNo: new FormControl(''),
  });

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
    const formValue = this.userForm.value;
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', formValue).subscribe({
      next: (res) => {
        alert('User created');
        this.getUsers();
      },
      error: (err) => {
        alert('Error: ' + err.error);
      },
    });
  }

  onEdit(item: any) {
    this.userForm = item;
  }
  onUpdateUser() {
    // this.userObject.createdDate = new Date();
    const formValue = this.userForm.value;
    this.http
      .put(
        'https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' + formValue.userId,
        this.userForm
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
    const formValue = this.userForm.value;
    this.http
      .delete(
        'https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=' + formValue.userId
      )
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
    userForm: new FormGroup({
      userId: new FormControl(0),
      emailId: new FormControl(''),
      password: new FormControl(''),
      fullName: new FormControl(''),
      mobileNo: new FormControl(''),
    });
  }
}
