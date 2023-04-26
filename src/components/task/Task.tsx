import React from 'react';
import { ITask } from '../../types/ITasktypes';

interface ITaskProps {
    task: ITask;
}

const Task: React.FC<ITaskProps> = ({ task }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.completed ? 'Completed' : 'Pending'}</p>
        </div>
    );
};

export default Task;