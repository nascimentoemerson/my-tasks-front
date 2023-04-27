import React from "react";
import { Task } from "../../interfaces/Task";
import { FaEdit, FaTrash } from "react-icons/fa";
import { StyledTaskListItem, TaskInfo, TaskTitle, TaskDescription, TaskActions, TaskButton } from "./styles";


type TaskListItemProps = {
    task: Task;
    onEditTask: (task: Task) => void;
    onDeleteTask: (taskId: string) => void;
};

const TaskListItem: React.FC<TaskListItemProps> = ({
    task,
    onEditTask,
    onDeleteTask,
}) => {
    const handleEditClick = () => {
        onEditTask(task);
    };

    const handleDeleteClick = () => {
        onDeleteTask(task.id);
    };

    return (
        <StyledTaskListItem>
            <TaskInfo>
                <TaskTitle>{task.title}</TaskTitle>
                <TaskDescription>{task.description}</TaskDescription>
            </TaskInfo>
            <TaskActions>
                <TaskButton onClick={handleEditClick}>
                    <FaEdit />
                </TaskButton>
                <TaskButton onClick={handleDeleteClick} danger>
                    <FaTrash />
                </TaskButton>
            </TaskActions>
        </StyledTaskListItem>
    );
};

export default TaskListItem;