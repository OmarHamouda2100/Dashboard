import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  router: Router = inject(Router)

  @Input() toggel = false
  @Output() toggelling = new EventEmitter()

  ontoggel() {
    this.toggelling.emit()
  }

  nav() {
    this.router.navigate(['layout/profile'])
  }
}
