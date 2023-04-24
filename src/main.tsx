import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskManagerPage from './pages/TaskManager/taskManagerPage'
import TaskListPage from './pages/TaskList/TaskListPage'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskManagerPage/>
    <TaskListPage/>
  </React.StrictMode>,
)
