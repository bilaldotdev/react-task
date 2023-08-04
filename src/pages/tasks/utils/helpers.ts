import { Task } from '../../../types/task.types';

/* 
since we are using localStorage to persist data,
no need to use global state.
*/
export const getLocalTasks = (): Task[] => {
  const localTasks = localStorage.getItem('tasks');

  if (!localTasks) return [];

  try {
    const parsed = JSON.parse(localTasks);

    return parsed as Task[];
  } catch (error) {
    return [];
  }
};
