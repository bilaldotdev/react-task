import { useState, ChangeEvent, useCallback } from 'react';

import Stack from '../../../components/Stack';
import { Task } from '../../../types/task.types';
import TaskCard from '../components/TaskCard';
import { getLocalTasks } from '../utils/helpers';

const BulkDelete = () => {
  const [tasks, setTasks] = useState<Task[]>(getLocalTasks);
  const [selectionMapping, setSelectionMapping] = useState<Record<string, string>>({});

  const handleToggleCheck = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: string): void => {
      if (e.target.checked) {
        if (selectionMapping[id]) return;

        setSelectionMapping(prev => ({ ...prev, [id]: id }));
      } else {
        setSelectionMapping(prev => Object.fromEntries(Object.entries(prev).filter(([k]) => k !== id)));
      }
    },
    [selectionMapping]
  );

  const handleDeleteTasks = (): void => {
    const filtered = getLocalTasks().filter(item => !selectionMapping[item.id]);

    localStorage.setItem('tasks', JSON.stringify(filtered));
    setSelectionMapping({});
    setTasks(filtered);
  };

  return (
    <Stack $gap="12px" $direction="column">
      <Stack $align="center" $justify="space-between">
        <h2>Bulk Delete</h2>

        <span />

        {Object.keys(selectionMapping).length > 0 && (
          <button onClick={handleDeleteTasks}>Delete Selected</button>
        )}
      </Stack>

      <Stack $gap="12px" $direction="column">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard
              checkbox
              checked={!!selectionMapping[task.id]}
              onToggleChecked={handleToggleCheck}
              key={task.id}
              task={task}
            />
          ))
        ) : (
          <Stack $direction="column" $gap="10px" $align="center">
            <p className="text-center">No tasks yet!</p>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default BulkDelete;
