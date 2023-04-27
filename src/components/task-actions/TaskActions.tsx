import React from "react";
import { FaPlus } from "react-icons/fa";
import { AddTaskButton, StyledTaskActions } from "./styles";


type TaskActionsProps = {
    onAddTask: () => void;
};


const TaskActions: React.FC<TaskActionsProps> = ({ onAddTask }) => {
    return (
        <StyledTaskActions>
            <h2>Tarefas</h2>
            <AddTaskButton onClick={onAddTask}>
                <FaPlus /> Adicionar Tarefa
            </AddTaskButton>
        </StyledTaskActions>
    );
};

export default TaskActions;