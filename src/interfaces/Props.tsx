import { Task } from "./Task";

export interface Props {
    tasks: Task[];
    onEditTask: (updatedTask: Task) => void;
    onDeleteTask: (taskId: string) => void;
}