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
  gender: 'Male' | 'Female';
  birthDate: string;
  country: string;
  job: string;
  level: 'Junior' | 'Mid-Level' | 'Senior';
  yearsOfExperience: number;
  salary: number;
  projectsWorkedOn: number;
  programmingLanguages: string[];
  paymentMethod: 'Bank Transfer' | 'PayPal' | 'Crypto' | 'Credit Card';
  subscription: 'Premium' | 'Standard';
  tasks: {
    title: string;
    description: string;
    status: 'new' | 'in-progress' | 'done';
  }[];
  lastDraft: {
    title: string;
    description: string;
  };
  email: string;
  phone: string;
  techSkills: string[];
  softSkills: string[];
}

