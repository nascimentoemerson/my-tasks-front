import styled from 'styled-components';

export const StyledTaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const TaskTitle = styled.h3`
  margin: 0;
`;

export const TaskDescription = styled.p`
  margin: 0;
`;

export const TaskActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

interface TaskButtonProps {
  danger?: boolean;
}

export const TaskButton = styled.button<TaskButtonProps>`
  border: none;
  background-color: ${(props) => (props.danger ? '#dc3545' : '#007bff')};
  color: #fff;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.danger ? '#c82333' : '#0069d9')};
  }
`;