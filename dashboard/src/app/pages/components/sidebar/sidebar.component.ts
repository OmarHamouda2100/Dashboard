import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  imports: [
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() toggel = false
  @Output() toggelling = new EventEmitter()

  ontoggel() {
    this.toggelling.emit()
  }
}
