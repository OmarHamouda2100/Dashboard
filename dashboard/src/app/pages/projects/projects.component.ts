import { Component, computed, inject } from '@angular/core';
import { LoginService } from '../../auth/login.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Task } from '../../interfacs';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatProgressBarModule,
    CdkDrag,
    CdkDropList,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  loginService: LoginService = inject(LoginService)

  currentUser = computed(() => this.loginService.currentUser())

  prjectStatus(value: number) {
    if(value >= 1 && value <= 50) {
      return 'low'
    }else if(value > 50 && value <= 75) {
      return 'medium'
    }else {
      return 'high'
    }
  }

  getTasksByStatus(status: string) {
    return this.currentUser()?.tasks.filter((task) => task.status === status) || []
  }

  getStatusFromListId(id: string ) {
    switch(id) {
      case 'new': return 'new'
      case 'in-progress' : return 'in-progress'
      case 'done': return 'done'
      default: return 'new'
    }
  }

  drop(event: CdkDragDrop<Task[]>) {
    const previousData = event.previousContainer.data ?? [];
    const containerData = event.container.data ?? [];

    if (event.previousContainer === event.container) {
      moveItemInArray(containerData, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        previousData,
        containerData,
        event.previousIndex,
        event.currentIndex
      );
    }

    containerData[event.currentIndex].status = this.getStatusFromListId(event.container.id);
  }
}
