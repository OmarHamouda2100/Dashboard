import { Injectable, signal } from '@angular/core';
import { Employee } from '../interfacs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private employees = signal<Employee[]>([
    {
      username: 'Omar_Hamouda',
      password: 'omar',
      name: 'Omar Hamouda',
      gender: 'Male',
      birthDate: '1992-05-14',
      country: 'Egypt',
      job: 'Frontend Developer',
      level: 'Mid-Level',
      yearsOfExperience: 5,
      salary: 4500,
      projectsWorkedOn: 12,
      programmingLanguages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
      paymentMethod: 'Bank Transfer',
      subscription: 'Premium',
      tasks: [
        { title: 'Build Navbar', description: 'Create a responsive navbar.', status: 'done' },
        { title: 'Fix Bugs', description: 'Resolve UI issues in the dashboard.', status: 'in-progress' },
        { title: 'Add Animations', description: 'Enhance UX with smooth animations.', status: 'new' },
        { title: 'Optimize Performance', description: 'Improve page load times.', status: 'done' },
        { title: 'Refactor Code', description: 'Clean up legacy code.', status: 'in-progress' },
        { title: 'Implement Dark Mode', description: 'Add dark mode toggle.', status: 'new' },
        { title: 'Write Unit Tests', description: 'Add tests for core components.', status: 'done' },
        { title: 'Update Documentation', description: 'Document new features.', status: 'in-progress' },
        { title: 'Integrate API', description: 'Connect frontend to backend API.', status: 'new' },
        { title: 'Design New Layout', description: 'Create a modern layout for the homepage.', status: 'done' },
        { title: 'Fix Cross-Browser Issues', description: 'Ensure compatibility with all browsers.', status: 'in-progress' },
        { title: 'Add Accessibility Features', description: 'Improve accessibility for screen readers.', status: 'new' },
        { title: 'Deploy to Production', description: 'Push the latest changes to production.', status: 'done' },
        { title: 'Review Pull Requests', description: 'Review and merge pending PRs.', status: 'in-progress' },
        { title: 'Plan Sprint', description: 'Organize tasks for the next sprint.', status: 'new' },
      ],
      lastDraft: { title: 'Landing Page UI revamp', description: 'New layout for the homepage' },
      email: 'omar.hamouda@example.com',
      phone: '+1 234 567 8901',
      techSkills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Bootstrap', 'Responsive Design'],
      softSkills: ['Problem-Solving', 'Time Management', 'Attention to Detail', 'Creativity'],
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Develop a new e-commerce platform for the company.',
          progress: 75,
          startDate: '2023-03-01',
        },
        {
          name: 'Admin Dashboard',
          description: 'Build an admin dashboard for managing orders and users.',
          progress: 90,
          startDate: '2023-05-15',
        },
        {
          name: 'Mobile App Redesign',
          description: 'Redesign the mobile app for better user experience.',
          progress: 50,
          startDate: '2023-07-10',
        },
      ],
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
        { title: 'Conduct User Research', description: 'Gather feedback from users.', status: 'done' },
        { title: 'Create Prototype', description: 'Build a clickable prototype.', status: 'in-progress' },
        { title: 'Test Usability', description: 'Run usability tests on the new design.', status: 'new' },
        { title: 'Update Design System', description: 'Add new components to the design system.', status: 'done' },
        { title: 'Collaborate with Developers', description: 'Work with devs to implement designs.', status: 'in-progress' },
        { title: 'Design Icons', description: 'Create a new set of icons.', status: 'new' },
        { title: 'Review Analytics', description: 'Analyze user behavior data.', status: 'done' },
        { title: 'Improve Onboarding', description: 'Redesign the onboarding flow.', status: 'in-progress' },
        { title: 'Create Presentation', description: 'Prepare a presentation for stakeholders.', status: 'new' },
        { title: 'Update Branding', description: 'Refresh the company branding.', status: 'done' },
        { title: 'Design Email Templates', description: 'Create templates for marketing emails.', status: 'in-progress' },
        { title: 'Plan Design Sprint', description: 'Organize a design sprint for the next project.', status: 'new' },
      ],
      lastDraft: { title: 'Dashboard wireframe update', description: 'Updated the dashboard layout' },
      email: 'sara.smith@example.com',
      phone: '+1 987 654 3210',
      techSkills: ['Figma', 'Adobe XD', 'Sketch', 'UI/UX Principles', 'Prototyping', 'Design Systems'],
      softSkills: ['Collaboration', 'User Empathy', 'Communication', 'Critical Thinking'],
      projects: [
        {
          name: 'Website Redesign',
          description: 'Redesign the company website for a modern look.',
          progress: 85,
          startDate: '2023-02-10',
        },
        {
          name: 'Mobile App UI',
          description: 'Design the UI for the new mobile app.',
          progress: 60,
          startDate: '2023-04-20',
        },
        {
          name: 'User Research Study',
          description: 'Conduct a study to understand user needs.',
          progress: 100,
          startDate: '2023-01-05',
        },
      ],
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
        { title: 'Refactor Database', description: 'Optimize database schema.', status: 'done' },
        { title: 'Add Caching', description: 'Implement Redis for caching.', status: 'in-progress' },
        { title: 'Write Integration Tests', description: 'Add tests for API endpoints.', status: 'new' },
        { title: 'Deploy Microservices', description: 'Deploy new microservices to Kubernetes.', status: 'done' },
        { title: 'Monitor Performance', description: 'Set up monitoring for backend services.', status: 'in-progress' },
        { title: 'Update Documentation', description: 'Document API endpoints.', status: 'new' },
        { title: 'Implement WebSockets', description: 'Add real-time features.', status: 'done' },
        { title: 'Fix Security Vulnerabilities', description: 'Patch known security issues.', status: 'in-progress' },
        { title: 'Plan Scalability', description: 'Design for future growth.', status: 'new' },
        { title: 'Review Code', description: 'Review and merge pull requests.', status: 'done' },
        { title: 'Optimize Queries', description: 'Improve database query performance.', status: 'in-progress' },
        { title: 'Implement GraphQL', description: 'Add GraphQL support.', status: 'new' },
      ],
      lastDraft: { title: 'API performance optimization', description: 'Enhanced API speed' },
      email: 'mike.jones@example.com',
      phone: '+1 456 789 0123',
      techSkills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs', 'Docker', 'GraphQL'],
      softSkills: ['Analytical Thinking', 'Problem-Solving', 'Adaptability', 'Teamwork'],
      projects: [
        {
          name: 'API Gateway',
          description: 'Develop a unified API gateway for microservices.',
          progress: 95,
          startDate: '2023-06-01',
        },
        {
          name: 'Database Optimization',
          description: 'Optimize the database for better performance.',
          progress: 70,
          startDate: '2023-08-15',
        },
        {
          name: 'Authentication System',
          description: 'Implement a secure authentication system.',
          progress: 100,
          startDate: '2023-03-20',
        },
      ],
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
        { title: 'Refactor Components', description: 'Clean up React components.', status: 'done' },
        { title: 'Add Unit Tests', description: 'Write tests for frontend components.', status: 'in-progress' },
        { title: 'Integrate Payment Gateway', description: 'Add support for Stripe.', status: 'new' },
        { title: 'Optimize SEO', description: 'Improve search engine rankings.', status: 'done' },
        { title: 'Fix Responsive Issues', description: 'Ensure mobile responsiveness.', status: 'in-progress' },
        { title: 'Update Dependencies', description: 'Upgrade outdated packages.', status: 'new' },
        { title: 'Deploy to AWS', description: 'Push the latest changes to AWS.', status: 'done' },
        { title: 'Write Documentation', description: 'Document new features.', status: 'in-progress' },
        { title: 'Implement CI/CD', description: 'Set up continuous integration.', status: 'new' },
        { title: 'Review Code', description: 'Review and merge pull requests.', status: 'done' },
        { title: 'Plan Sprint', description: 'Organize tasks for the next sprint.', status: 'in-progress' },
        { title: 'Add Analytics', description: 'Track user behavior.', status: 'new' },
      ],
      lastDraft: { title: 'E-commerce checkout flow', description: 'Finalized checkout process' },
      email: 'emma.watson@example.com',
      phone: '+1 321 654 9870',
      techSkills: ['JavaScript', 'TypeScript', 'Angular', 'Node.js', 'SQL', 'Docker', 'REST APIs'],
      softSkills: ['Leadership', 'Project Management', 'Critical Thinking', 'Communication'],
      projects: [
        {
          name: 'E-commerce Backend',
          description: 'Develop the backend for the e-commerce platform.',
          progress: 80,
          startDate: '2023-04-10',
        },
        {
          name: 'Frontend Redesign',
          description: 'Redesign the frontend for better usability.',
          progress: 65,
          startDate: '2023-06-25',
        },
        {
          name: 'Payment Integration',
          description: 'Integrate Stripe for payment processing.',
          progress: 100,
          startDate: '2023-02-15',
        },
      ],
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
      console.log(this.currentUser())
    }else {
      this.error.set(true)
    }
  }
}
