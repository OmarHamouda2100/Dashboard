import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../interfacs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private employees: Employee[] = [
    {
      username: 'Omar_Hamouda',
      password: 'omar',
      name: 'Omar Hamouda',
      job: 'Frontend Developer',
      salary: 4500,
      projectsWorkedOn: 12,
      tasks: [
        { title: 'Build Navbar', description: 'Create a responsive navbar.', status: 'done' },
        { title: 'Fix Bugs', description: 'Resolve UI issues in the dashboard.', status: 'in-progress' },
        { title: 'Add Animations', description: 'Enhance UX with smooth animations.', status: 'new' },
      ],
      lastDraft: { title: 'Landing Page UI revamp', description: 'New layout for the homepage' },
      email: 'john.doe@example.com',
      phone: '+1 234 567 8901',
    },
    {
      username: 'sara_smith',
      password: 'Sara@456',
      name: 'Sara Smith',
      job: 'UI/UX Designer',
      salary: 4800,
      projectsWorkedOn: 15,
      tasks: [
        { title: 'Create Wireframe', description: 'Design wireframes for the new dashboard.', status: 'done' },
        { title: 'Update Colors', description: 'Revise color scheme based on feedback.', status: 'in-progress' },
        { title: 'Design Mobile UI', description: 'Ensure responsiveness for mobile users.', status: 'new' },
      ],
      lastDraft: { title: 'Dashboard wireframe update', description: 'Updated the dashboard layout' },
      email: 'sara.smith@example.com',
      phone: '+1 987 654 3210',
    },
    {
      username: 'mike_jones',
      password: 'Mike@789',
      name: 'Mike Jones',
      job: 'Backend Developer',
      salary: 5000,
      projectsWorkedOn: 10,
      tasks: [
        { title: 'Optimize API', description: 'Improve response times on endpoints.', status: 'done' },
        { title: 'Fix Authentication Bug', description: 'Resolve login timeout issues.', status: 'in-progress' },
        { title: 'Implement Logging', description: 'Add server-side logging.', status: 'new' },
      ],
      lastDraft: { title: 'API performance optimization', description: 'Enhanced API speed' },
      email: 'mike.jones@example.com',
      phone: '+1 456 789 0123',
    },
    {
      username: 'emma_watson',
      password: 'Emma@101',
      name: 'Emma Watson',
      job: 'Full-Stack Developer',
      salary: 5300,
      projectsWorkedOn: 18,
      tasks: [
        { title: 'Build Checkout Flow', description: 'Develop checkout for e-commerce site.', status: 'done' },
        { title: 'Implement Dark Mode', description: 'Add dark mode toggle.', status: 'in-progress' },
        { title: 'Enhance Security', description: 'Improve app security.', status: 'new' },
      ],
      lastDraft: { title: 'E-commerce checkout flow', description: 'Finalized checkout process' },
      email: 'emma.watson@example.com',
      phone: '+1 321 654 9870',
    },
  ];
  currentUser = signal<Employee | undefined>(undefined)
  error = signal<boolean>(false)

  constructor() {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      this.currentUser.set(JSON.parse(currentUser))
    }
  }

  login(username: string, password: string) {
    const user = this.employees.find((emp) => emp.username === username && emp.password === password)

    if(user) {
      this.currentUser.set(user)
      this.error.set(false)
      localStorage.setItem('currentUser', JSON.stringify(user))
    }else {
      this.error.set(true)
    }
  }
}
