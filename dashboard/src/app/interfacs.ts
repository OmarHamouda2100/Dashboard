export interface Task {
  title: string;
  description: string;
  status: 'new' | 'in-progress' | 'done';
}

export interface Draft {
  title: string;
  description: string;
}

export interface Employee {
  username: string;
  password: string;
  name: string;
  gender: string;
  birthDate: string;
  country: string;
  job: string;
  level: string;
  yearsOfExperience: number;
  salary: number;
  projectsWorkedOn: number;
  programmingLanguages: string[];
  paymentMethod: string;
  subscription: string;
  tasks: { title: string; description: string; status: 'new' | 'in-progress' | 'done' }[];
  lastDraft: { title: string; description: string };
  email: string;
  phone: string;
  techSkills: string[];
  softSkills: string[];
  projects: {
    name: string;
    description: string;
    progress: number; // Progress as a percentage (0-100)
    startDate: string; // Date in ISO format (e.g., '2023-01-15')
  }[];
}
