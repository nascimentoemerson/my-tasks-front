export interface Task {
  id: string;
  title: string;
  description: string;
  category?: string;
  completedts?: boolean;
}