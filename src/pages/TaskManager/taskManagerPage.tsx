import React from 'react';
import TaskManager from '../../components/TaskManager/taskManager';
import { Container } from '@mui/material';

const TaskManagerPage: React.FC = () => {
    return (
        <Container maxWidth="md">
            <TaskManager />
        </Container>
    );
};

export default TaskManagerPage;
