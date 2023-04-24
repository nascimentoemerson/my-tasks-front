import React from 'react';
import { Card, CardHeader, CardContent, Typography, IconButton} from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

interface TaskItemProps {
    task: {
        id: number,
        title: string,
        description: string,
        type: string
    },
    onDelete: (id: number) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
    return (
        <Card>
            <CardHeader
                title={task.title}
                action={
                    <IconButton onClick={() => onDelete(task.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {task.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Tipo: {task.type}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default TaskItem;