import { useState } from 'react';
import { IndexPage } from '@/pages/index';
import TaskListPage from '@/pages/TaskList/index';

import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'

// 假設你有其他頁面元件

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // 根據狀態渲染不同頁面
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <IndexPage />;
      case 'task':
        return <TaskListPage />;
      default:
        return <IndexPage />;
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* 導航按鈕 */}
      <nav>
        <button onClick={() => setCurrentPage('home')}>首頁</button>
        <button onClick={() => setCurrentPage('task')}>任務</button>
      </nav>
      
      {/* 動態渲染頁面 */}
      {renderPage()}
    </>
  )
}

export default App
