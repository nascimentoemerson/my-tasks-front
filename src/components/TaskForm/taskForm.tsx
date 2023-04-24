import React, { useState } from 'react';
import { TextField, FormControl, Select, MenuItem, Button } from '@mui/material';

interface TaskFormProps {
    onSubmit: (task: Task) => void;
}

interface Task {
    title: string;
    description: string;
    type: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [type, setType] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({ title, description, type });
        setTitle('');
        setDescription('');
        setType('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <TextField
                    id="title-input"
                    label="Título"
                    value={title}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField
                    id="description-input"
                    label="Descrição"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
                />
            </FormControl>
            <FormControl fullWidth>
                <Select
                    id="type-input"
                    value={type}
                    onChange={(event: React.ChangeEvent<{ value: unknown }>) => setType(event.target.value as string)}
                    displayEmpty
                >
                    <MenuItem value="" disabled>
                        Escolha um tipo
                    </MenuItem>
                    <MenuItem value="trabalho">Trabalho</MenuItem>
                    <MenuItem value="estudos">Estudos</MenuItem>
                    <MenuItem value="lazer">Lazer</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
                Salvar
            </Button>
        </form>
    );
};

export default TaskForm;
