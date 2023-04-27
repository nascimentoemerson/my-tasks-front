import { Task } from "./Task";

export interface TaskListProps {
    tasks: Task[];
    onEditTask: (updatedTask: Task) => void;
    onDeleteTask: (taskId: string) => void;
}