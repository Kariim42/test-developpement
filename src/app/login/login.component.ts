import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/assets/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;


  constructor(private authService : AuthService, private router : Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
    });
    console.log(this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()) {
      this.router?.navigateByUrl('/');
    }
  }

  onSubmit() {
    localStorage.setItem('login', this.loginForm.value.login);
    if (this.authService.isAuthenticated()) {
      this.router?.navigateByUrl('/');
    }
  }

}
