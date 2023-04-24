import React, { useState, useEffect } from 'react';
import TaskForm from '../TaskForm/taskForm';
import TaskList from '../TaskList/taskList';
import { Container, Typography } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TaskManagerProps {
    
 }

const TaskManager: React.FC<TaskManagerProps> = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) setTasks(JSON.parse(storedTasks));
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (newTask: Task) => {
        setTasks([...tasks, { id: Date.now(), ...newTask }]);
    };

    const handleDeleteTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Task Manager
            </Typography>
            <TaskForm onSubmit={handleAddTask} />
            <TaskList tasks={tasks} onDelete={handleDeleteTask} />
        </Container>
    );
};

export default TaskManager;
