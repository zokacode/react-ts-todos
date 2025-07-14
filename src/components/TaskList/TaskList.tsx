import { useTaskStore } from '@/store/Task/TaskStore';

export default function TaskList() {
  const { tasks, toggleTask, removeTask } = useTaskStore()

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} >
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />
          <span >
            {task.title}
          </span>
          <button onClick={() => removeTask(task.id)}>
            刪除
          </button>
        </li>
      ))}
    </ul>
  )
}
