import React from 'react';
import styled from 'styled-components';
import { Task } from '../../interfaces/Task';

interface Props {
    tasks: Task[];
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const TaskList: React.FC<Props> = ({ tasks }) => {
    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task.id}>
                    <div>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                    </div>
                    <div>
                        <span>{task.category}</span>
                        <input type="checkbox" checked={task.completed} readOnly />
                    </div>
                </ListItem>
            ))}
        </List>
    );
};




