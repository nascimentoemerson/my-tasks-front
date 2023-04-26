import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TaskList } from './components/taskList/TaskList';

const App: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://task-back.herokuapp.com/api/tasks');
      setTasks(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Tarefas</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;