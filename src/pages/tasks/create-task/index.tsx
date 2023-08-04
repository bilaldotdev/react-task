import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '../../../components/Stack';
import InputField from '../../../components/InputField';
import { getLocalTasks } from '../utils/helpers';

const CreateTask = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const createTask = (): void => {
    if (!name) {
      return alert('Please enter task name!');
    }

    const tasks = getLocalTasks();
    tasks.push({ name, id: crypto.randomUUID() });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    navigate('/list-tasks');
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Stack $align="center" $direction="column" $justify="center" $gap="22px">
      <h2 style={{ alignSelf: 'start' }}>Create Task</h2>

      <InputField
        ref={inputRef}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            createTask();
          }
        }}
        placeholder="e.g check emails"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button onClick={createTask}>Create</button>
    </Stack>
  );
};

export default CreateTask;
