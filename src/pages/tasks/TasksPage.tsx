import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ITask } from '../../types/ITasktypes';
import Task from '../../components/task/task';
const TasksPage: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);

    useEffect(() => {
        // function to fetch user's tasks from the API
        const fetchTasks = async () => {
            try {
                const response = await axios.get<ITask[]>(
                    'https://task-back.herokuapp.com/api/tasks'
                );
                setTasks(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksPage;