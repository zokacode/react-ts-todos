import { create } from 'zustand';
import { Task } from '@/types/Task';

/**
 * Task[] 任務列表。
 * addTask 新增任務到 store。
 * removeTask 依據 ID 移除任務。
 * toggleTaskDone 切換任務完成狀態。
 */
interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  toggleTaskDone: (id: number) => void;
};

export const useTaskStore = create<TaskStore>((set, get) => ({
  // as Task[]，確保 tasks 為 Task 類型的陣列
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]') as Task[],

  addTask: (title: string) => {
    const newTask: Task = { id: Date.now(), title, done: false };
    const updatedTasks: Task[] = [...get().tasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    set({ tasks: updatedTasks });
  },
}));