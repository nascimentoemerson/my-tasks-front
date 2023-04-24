import React, { useState, useEffect } from 'react';
import TaskList from '../../components/TaskList/taskList';
import { Container, Typography } from '@mui/material'

interface Task {
    id: number;
    title: string;
    description: string;
    type: string;
}

const TaskListPage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) setTasks(JSON.parse(storedTasks));
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleDeleteTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Task List
            </Typography>
            <TaskList tasks={tasks} onDelete={handleDeleteTask} />
        </Container>
    );
};

export default TaskListPage;
