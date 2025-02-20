import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../interfacs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private employees= signal<Employee[]>([
    {
      username: 'Omar_Hamouda',
      password: 'omar',
      name: 'Omar Hamouda',
      gender: 'Male',
      birthDate: '1992-05-14',
      country: 'Egypt',
      job: 'Frontend Developer',
      level: 'Mid-Level',
      yearsOfExperience: 3,
      salary: 4500,
      projectsWorkedOn: 12,
      programmingLanguages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
      paymentMethod: 'Bank Transfer',
      subscription: 'Premium',
      tasks: [
        { title: 'Build Navbar', description: 'Create a responsive navbar.', status: 'done' },
        { title: 'Fix Bugs', description: 'Resolve UI issues in the dashboard.', status: 'in-progress' },
        { title: 'Add Animations', description: 'Enhance UX with smooth animations.', status: 'new' },
      ],
      lastDraft: { title: 'Landing Page UI revamp', description: 'New layout for the homepage' },
      email: 'omar.hamouda@example.com',
      phone: '+1 234 567 8901',
      techSkills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Bootstrap', 'Responsive Design'],
      softSkills: ['Problem-Solving', 'Time Management', 'Attention to Detail', 'Creativity'],
    },
    {
      username: 'sara_smith',
      password: 'Sara@456',
      name: 'Sara Smith',
      gender: 'Female',
      birthDate: '1988-09-22',
      country: 'USA',
      job: 'UI/UX Designer',
      level: 'Senior',
      yearsOfExperience: 8,
      salary: 4800,
      projectsWorkedOn: 15,
      programmingLanguages: ['JavaScript', 'Python'],
      paymentMethod: 'PayPal',
      subscription: 'Standard',
      tasks: [
        { title: 'Create Wireframe', description: 'Design wireframes for the new dashboard.', status: 'done' },
        { title: 'Update Colors', description: 'Revise color scheme based on feedback.', status: 'in-progress' },
        { title: 'Design Mobile UI', description: 'Ensure responsiveness for mobile users.', status: 'new' },
      ],
      lastDraft: { title: 'Dashboard wireframe update', description: 'Updated the dashboard layout' },
      email: 'sara.smith@example.com',
      phone: '+1 987 654 3210',
      techSkills: ['Figma', 'Adobe XD', 'Sketch', 'UI/UX Principles', 'Prototyping', 'Design Systems'],
      softSkills: ['Collaboration', 'User Empathy', 'Communication', 'Critical Thinking'],
    },
    {
      username: 'mike_jones',
      password: 'Mike@789',
      name: 'Mike Jones',
      gender: 'Male',
      birthDate: '1990-12-05',
      country: 'Canada',
      job: 'Backend Developer',
      level: 'Senior',
      yearsOfExperience: 7,
      salary: 5000,
      projectsWorkedOn: 10,
      programmingLanguages: ['Node.js', 'Python', 'SQL'],
      paymentMethod: 'Crypto',
      subscription: 'Premium',
      tasks: [
        { title: 'Optimize API', description: 'Improve response times on endpoints.', status: 'done' },
        { title: 'Fix Authentication Bug', description: 'Resolve login timeout issues.', status: 'in-progress' },
        { title: 'Implement Logging', description: 'Add server-side logging.', status: 'new' },
      ],
      lastDraft: { title: 'API performance optimization', description: 'Enhanced API speed' },
      email: 'mike.jones@example.com',
      phone: '+1 456 789 0123',
      techSkills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs', 'Docker', 'GraphQL'],
      softSkills: ['Analytical Thinking', 'Problem-Solving', 'Adaptability', 'Teamwork'],
    },
    {
      username: 'emma_watson',
      password: 'Emma@101',
      name: 'Emma Watson',
      gender: 'Female',
      birthDate: '1995-07-30',
      country: 'UK',
      job: 'Full-Stack Developer',
      level: 'Junior',
      yearsOfExperience: 3,
      salary: 5300,
      projectsWorkedOn: 18,
      programmingLanguages: ['JavaScript', 'TypeScript', 'Node.js'],
      paymentMethod: 'Credit Card',
      subscription: 'Standard',
      tasks: [
        { title: 'Build Checkout Flow', description: 'Develop checkout for e-commerce site.', status: 'done' },
        { title: 'Implement Dark Mode', description: 'Add dark mode toggle.', status: 'in-progress' },
        { title: 'Enhance Security', description: 'Improve app security.', status: 'new' },
      ],
      lastDraft: { title: 'E-commerce checkout flow', description: 'Finalized checkout process' },
      email: 'emma.watson@example.com',
      phone: '+1 321 654 9870',
      techSkills: ['JavaScript', 'TypeScript', 'Angular', 'Node.js', 'SQL', 'Docker', 'REST APIs'],
      softSkills: ['Leadership', 'Project Management', 'Critical Thinking', 'Communication'],
    },
  ]);

  currentUser = signal<Employee | undefined>(undefined)
  error = signal<boolean>(false)

  constructor() {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      this.currentUser.set(JSON.parse(currentUser))
    }
  }

  login(username: string, password: string) {
    const user = this.employees().find((emp) => emp.username === username && emp.password === password)

    if(user) {
      this.currentUser.set({...user})
      this.error.set(false)
      localStorage.setItem('currentUser', JSON.stringify(user))
    }else {
      this.error.set(true)
    }
  }
}
