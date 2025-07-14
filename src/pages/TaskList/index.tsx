import TaskForm from '@/components/TaskList/TaskForm';
import TaskList from '@/components/TaskList/TaskList';

function TaskListPage() {
  return (
    <main>
      <h1>任務管理器（React 版）</h1>
      <TaskForm />
      <TaskList />
    </main>
  )
}

export default TaskListPage;
