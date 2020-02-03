export interface TodoData {
  description: string;
  responsible: string;
  priority: string;
  completed: boolean;
}

export interface TodoType extends TodoData {
  id: number;
}
