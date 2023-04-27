import React from "react";
import { Task } from "../../interfaces/Task";
import {
    StyledTaskList,
    TaskItem,
    TaskInfo,
    TaskTitle,
    TaskDescription,
    TaskActions,
    TaskButton,
    EditIcon,
    DeleteIcon,
} from "./styles";

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
                    <TaskInfo>
                        <TaskTitle>{task.title}</TaskTitle>
                        <TaskDescription>{task.description}</TaskDescription>
                    </TaskInfo>
                    <TaskActions>
                        <TaskButton onClick={() => onEditTask(task)}>
                            <EditIcon />
                            Editar
                        </TaskButton>
                        <TaskButton danger onClick={() => onDeleteTask(task.id)}>
                            <DeleteIcon />
                            Excluir
                        </TaskButton>
                    </TaskActions>
                </TaskItem>
            ))}
        </StyledTaskList>
    );
};

export default TaskList;