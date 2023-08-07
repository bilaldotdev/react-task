import { memo } from 'react';
import { TaskCardProps } from '../../../types/task.types';
import Card from '../../../components/Card';
import Stack from '../../../components/Stack';

const Component = <T extends TaskCardProps>(
  props: T['checkbox'] extends true ? Required<TaskCardProps> : T
) => {
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
};

const TaskCard = memo(Component) as typeof Component;

export default TaskCard;
