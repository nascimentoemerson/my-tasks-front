import React, { useState } from "react";
import TaskListItem from "../task-item/TaskListItem";
import TaskActions from "../task-actions/TaskActions";
import { Task } from "../../interfaces/Task";
import { StyledTaskList } from "./styles";



const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: "1",
            title: "Fazer compras",
            description: "Comprar leite, pão, queijo e presunto",
        },
        {
            id: "2",
            title: "Estudar programação",
            description: "Estudar React, Node.js e TypeScript",
        },
        {
            id: "3",
            title: "Fazer exercícios",
            description: "Correr no parque e fazer musculação",
        },
    ]);

    const handleEditTask = (updatedTask: Task) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
    };

    const handleDeleteTask = (taskId: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const handleAddTask = () => {
        // Implementar adição de nova tarefa
    };

    return (
        <StyledTaskList>
            <TaskActions onAddTask={handleAddTask} />
            <ul>
                {tasks.map((task) => (
                    <TaskListItem
                        key={task.id}
                        task={task}
                        onEditTask={handleEditTask}
                        onDeleteTask={handleDeleteTask}
                    />
                ))}
            </ul>
        </StyledTaskList>
    );
};

export default TaskList;