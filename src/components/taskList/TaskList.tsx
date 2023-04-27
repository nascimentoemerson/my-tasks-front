import React from 'react';
import { StyledTaskList, TaskItem, TaskTitle, TaskDescription, TaskActions, TaskButton } from './styles';
import { Task } from '../../interfaces/Task';

interface Props {
    tasks: Task[];
    onEditTask: (updatedTask: Task) => void;
    onDeleteTask: (taskId: string) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onEditTask, onDeleteTask }) => {
    return (
        <StyledTaskList>
            {tasks.map((task) => (
                <TaskItem key={task.id}>
                    <TaskTitle>{task.title}</TaskTitle>
                    <TaskDescription>{task.description}</TaskDescription>
                    <TaskActions>
                        <TaskButton onClick={() => onEditTask(task)}>Editar</TaskButton>
                        <TaskButton danger onClick={() => onDeleteTask(task.id)}>
                            Excluir
                        </TaskButton>
                    </TaskActions>
                </TaskItem>
            ))}
        </StyledTaskList>
    );
};

export default TaskList;