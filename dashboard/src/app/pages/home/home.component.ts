import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/login.service';
import { Employee } from '../../interfacs';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  router: Router = inject(Router)
  loginService = inject(LoginService)

  currentUser = signal<Employee | undefined>(undefined)

  ngOnInit() {
    this.getEmployee()
  }

  getEmployee() {
    this.currentUser.set(this.loginService.currentUser())
  }

  goToProfile() {
    this.router.navigate(['layout/profile'])
  }
}
