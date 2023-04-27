import React, { useState } from 'react';
import TaskList from './components/tasklist/TaskList';
import { Task } from './interfaces/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Fazer compras',
      description: 'Comprar leite, pão, queijo e presunto',
    },
    {
      id: '2',
      title: 'Estudar programação',
      description: 'Estudar React, Node.js e TypeScript',
    },
    {
      id: '3',
      title: 'Fazer exercícios',
      description: 'Correr no parque e fazer musculação',
    },
  ]);

  const handleEditTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;