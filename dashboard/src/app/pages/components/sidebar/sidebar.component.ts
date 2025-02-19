import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../../auth/login.service';


@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  router: Router = inject(Router)
  loginService: LoginService = inject(LoginService)

  @Input() toggel = false
  @Output() toggelling = new EventEmitter()

  ontoggel() {
    this.toggelling.emit()
  }

  nav() {
    this.router.navigate(['layout/profile'])
    this.loginService.currentUser.set(undefined)
  }
}
