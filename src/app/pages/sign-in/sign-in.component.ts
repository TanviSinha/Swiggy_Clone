import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  showLoginForm = true;
  message = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required],
    });
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  onLogin() {
    if (this.loginForm.valid) {
      this.http.post('https://672d058cfd89797156411e2f.mockapi.io/Login', this.loginForm.value).subscribe(
        (response) => {
          this.message = 'Logged in successfully';
          console.log(response);
        },
        (error) => {
          this.message = 'Error logging in';
          console.error(error);
        }
      );
    }
  }
  onRegister() {
    if (this.registerForm.valid) {
      if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
        this.message = 'Passwords do not match';
        return;
      }
      this.http.post('https://672d058cfd89797156411e2f.mockapi.io/Register', this.registerForm.value).subscribe(
        (response) => {
          this.message = 'Account created successfully';
          console.log(response);
        },
        (error) => {
          this.message = 'Error creating account';
          console.error(error);
        }
      );
    }
  }
  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
  }
}