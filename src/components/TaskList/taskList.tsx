import React from 'react';
import TaskItem from '../TaskItem/taskItem';
import { Grid } from '@mui/material';

interface TaskListProps {
    tasks: Array<{
        id: number;
        title: string;
        description: string;
        type: string;
    }>;
    onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
    return (
        <Grid container spacing={3}>
            {tasks.map((task) => (
                <Grid item key={task.id} xs={12} sm={6} md={4}>
                    <TaskItem task={task} onDelete={onDelete} />
                </Grid>
            ))}
        </Grid>
    );
};

export default TaskList;
