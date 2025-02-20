import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { LoginService } from '../../auth/login.service';
import { Employee } from '../../interfacs';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  loginService: LoginService = inject(LoginService)
  currentUser = signal<Employee | undefined>(undefined);

  constructor() {
    effect(() => {
      this.currentUser.set(this.loginService.currentUser())
    })
  }
  ngOnInit(): void {
    console.log(this.currentUser()?.techSkills)
  }
}
