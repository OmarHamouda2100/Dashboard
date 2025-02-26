import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { LoginService } from '../../auth/login.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  loginService: LoginService = inject(LoginService)

  currentUser = computed(() => this.loginService.currentUser());
  show  = signal(false)
  selected = signal<'none' | 'new' | 'in-progress' | 'done'>('none')

  get selectedValue(): 'none' | 'new' | 'in-progress' | 'done' {
    return this.selected();
  }

  set selectedValue(value: 'none' | 'new' | 'in-progress' | 'done') {
    this.selected.set(value);
  }

  filteredTasks = computed(() => {
    const tasks = this.currentUser()?.tasks || []
    const filter = this.selected()

    switch(filter) {
      case 'new':
        return tasks.filter((task) => task.status === 'new');

      case 'in-progress':
        return tasks.filter((task) => task.status === 'in-progress');

      case 'done':
        return tasks.filter((task) => task.status === 'done');

      default:
        return tasks
    }
  })

  showMore() {
    this.show.set(!this.show());
  }
}
