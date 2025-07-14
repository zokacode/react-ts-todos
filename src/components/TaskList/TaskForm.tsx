import { useState } from 'react';
import { useTaskStore } from '@/store/Task/TaskStore';


export default function TaskForm() { 
  const [title, setTitle] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">新增任務</button>
      </form>
    </>
  );
};