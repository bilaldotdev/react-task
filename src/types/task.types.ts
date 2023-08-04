import { ChangeEvent } from 'react';

export interface Task {
  id: string;
  name: string;
}

export interface TaskCardProps {
  task: Task;
  checked?: boolean;
  checkbox?: boolean;
  onToggleChecked?: (e: ChangeEvent<HTMLInputElement>, taskId: string) => void;
}
