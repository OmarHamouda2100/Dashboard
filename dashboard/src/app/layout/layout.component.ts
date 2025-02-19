import { Component, inject, OnInit, signal } from '@angular/core';
import { SidebarComponent } from "../pages/components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { LoginService } from '../auth/login.service';
import { Employee } from '../interfacs';

@Component({
  selector: 'app-layout',
  imports: [
    SidebarComponent,
    RouterOutlet,
    MatIconButton,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  logingService = inject(LoginService)

  isSidebarCollapsed = false
  currentUser = signal<Employee | undefined>(undefined)

  ngOnInit(): void {
    this.currentUser.set(this.logingService.currentUser())
  }

  sidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed
  }
}
