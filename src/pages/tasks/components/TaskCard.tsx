import { memo } from 'react';
import { TaskCardProps } from '../../../types/task.types';
import Card from '../../../components/Card';
import Stack from '../../../components/Stack';

const TaskCard = memo((props: TaskCardProps) => {
  const { task, checkbox, checked, onToggleChecked } = props || {};
  return (
    <Card>
      <Stack>
        {checkbox && (
          <input
            onChange={e => {
              onToggleChecked && onToggleChecked(e, task.id);
            }}
            checked={!!checked}
            className="pointer"
            type="checkbox"
          />
        )}
        <p>{task.name}</p>
      </Stack>
    </Card>
  );
});

export default TaskCard;
