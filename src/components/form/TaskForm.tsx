import React, { useState } from 'react';
import axios from 'axios';
import { Task } from '../../interfaces/Task';
import { Input, Label, Select, TextArea } from './styles';
import { Form } from 'react-router-dom';

interface Props {
    task?: Task | undefined;
    onSubmit: (task: Task) => void;
}



const TaskForm: React.FC<Props> = ({ task, onSubmit }) => {
    const [formValues, setFormValues] = useState<Task>(
        task || {
            id: '',
            title: '',
            description: '',
            category: '',
            completed: false,
        }
    );

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (task) {
            const response = await axios.put(
                `https://task-back.herokuapp.com/api/tasks/${task.id}`,
                formValues
            );
            onSubmit(response.data);
        } else {
            const response = await axios.post('https://task-back.herokuapp.com/api/tasks', formValues);
            const newTask = {
                ...response.data,
                completed: false,
            };
            onSubmit(newTask);
        }
        setFormValues({
            id: '',
            title: '',
            description: '',
            category: '',
            completed: false,
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor="title">Título</Label>
            <Input
                type="text"
                name="title"
                id="title"
                value={formValues.title}
                onChange={handleInputChange}
                required
            />

            <Label htmlFor="description">Descrição</Label>
            <TextArea
                name="description"
                id="description"
                value={formValues.description}
                onChange={handleInputChange}
                required
            />

            <Label htmlFor="category">Categoria</Label>
            <Select
                name="category"
                id="category"
                value={formValues.category}
                onChange={handleInputChange}
                required
            >
                <option value="">Selecione uma categoria</option>
                <option value="trabalho">Trabalho</option>
                <option value="estudos">Estudos</option>
                <option value="casa">Casa</option>
            </Select>

            <Input
                type="checkbox"
                name="completed"
                id="completed"
                checked={formValues.completed}
                onChange={handleInputChange}
            />
            <Label htmlFor="completed">Concluída</Label>

            <button type="submit">{task ? 'Editar' : 'Adicionar'}</button>
        </Form>
    );
};

export default TaskForm;