import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

let gard = false
@Component({
  selector: 'app-auth',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  @Input() error?: string | null;
  router: Router = inject(Router)
  loginService = inject(LoginService)

  isLogin = true
  errMassage = false


  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  toggle() {
    this.isLogin = !this.isLogin
  }

  submit(username: string, password: string) {
      this.loginService.login(username, password)
      this.errMassage = false

      if (!this.loginService.error()) {
        console.log(this.loginService.error())
        this.router.navigate(['/layout/home']);
      } else {
        console.log(this.loginService.error())
        this.errMassage = true
      }
  }
}


