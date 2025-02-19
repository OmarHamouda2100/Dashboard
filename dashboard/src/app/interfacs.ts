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
  job: string;
  salary: number;
  projectsWorkedOn: number;
  tasks: Task[];
  lastDraft: Draft;
  email: string;
  phone: string;
}
