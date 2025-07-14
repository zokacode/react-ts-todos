import { create } from 'zustand';
import type { Task } from '@/types/Task';

/**
 * Task[] 任務列表。
 * addTask 新增任務到 store。
 * removeTask 依據 ID 移除任務。
 * toggleTaskDone 切換任務完成狀態。
 */
interface TaskStore {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
};

export const useTaskStore = create<TaskStore>((set, get) => ({
  // as Task[]，確保 tasks 為 Task 類型的陣列
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]') as Task[],

  /**
   * addTask: (title: string) => void  新增任務到 store
   * @param title string  新增的任務標題
   */
  addTask: (title: string): void => {
    const newTask: Task = { id: Date.now(), title, done: false };
    const updatedTasks: Task[] = [...get().tasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    set({ tasks: updatedTasks });
  },

  /**
   * toggleTask: (id: number) => void  切換任務完成狀態
   * @param id number  任務的 ID
   */
  toggleTask: (id: number): void => {
    const updated = get().tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updated));
    set({ tasks: updated });
  },

  /**
   * removeTask: (id: number) => void  依據 ID 移除任務
   * @param id number  任務的 ID
   */
  removeTask: (id: number): void => {
    const updated = get().tasks.filter(task => task.id !== id)
    localStorage.setItem('tasks', JSON.stringify(updated));
    set({ tasks: updated });
  },
}));