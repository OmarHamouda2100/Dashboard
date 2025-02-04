import { Component } from '@angular/core';
import { SidebarComponent } from "../pages/components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  imports: [
    SidebarComponent,
    RouterOutlet,
    MatIconButton,
    MatIconModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isSidebarCollapsed = false

  sidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed
  }
}
