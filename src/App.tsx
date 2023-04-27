import React, { useState } from 'react';
import styled from 'styled-components';
import TaskForm from './components/form/TaskForm';
import TaskList from './components/tasklist/TaskList';
import { Task } from './interfaces/Task';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const handleEditTask = (updatedTask: Task) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <Container>
      <h1>Minhas Tarefas</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
    </Container>
  );
};

export default App;