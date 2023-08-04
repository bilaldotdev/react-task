// components
import Stack from '../../../components/Stack';
import TaskCard from '../components/TaskCard';

// utils
import { getLocalTasks } from '../utils/helpers';

const ListTasks = () => {
  const tasks = getLocalTasks();

  return (
    <Stack $gap="12px" $direction="column">
      <Stack $justify="space-between">
        <h2>Tasks List</h2>
      </Stack>
      <Stack $gap="12px" $direction="column">
        {tasks.length > 0 ? (
          tasks.map(task => <TaskCard key={task.id} task={task} />)
        ) : (
          <p className="text-center">No tasks yet!</p>
        )}
      </Stack>
    </Stack>
  );
};

export default ListTasks;
