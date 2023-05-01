import styled from "styled-components";
import { colors, spacing } from "../tasklist/variables";

export const  StyledTaskActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.medium};
`;

export const TaskActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${spacing.medium};
`;


export const  AddTaskButton = styled.button`
  border: none;
  background-color: ${colors.primary};
  color: ${colors.light};
  font-size: 1rem;
  font-weight: bold;
  padding: ${spacing.small} ${spacing.medium};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.primary};
  }
`;