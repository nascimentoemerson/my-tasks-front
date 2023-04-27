import styled from "styled-components";
import { colors, spacing } from "../tasklist/variables";

export const  StyledTaskListItem = styled.li`
  display: flex;
  margin-bottom: ${spacing.medium};
  border-radius: 5px;
  background-color: ${colors.dark};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const  TaskInfo = styled.div`
  flex: 1;
  padding: ${spacing.medium};
`;

export const  TaskTitle = styled.h3`
  margin: 0;
  margin-bottom: ${spacing.small};
  color: ${colors.light};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const  TaskDescription = styled.p`
  margin: 0;
  margin-bottom: ${spacing.small};
  color: ${colors.secondary};
  font-size: 1rem;
  line-height: 1.5;
`;

export const  TaskActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${spacing.medium};
`;

export const  TaskButton = styled.button<{ danger?: boolean }>`
  border: none;
  background-color: ${({ danger }) =>
    danger ? colors.danger : colors.primary};
  color: ${colors.light};
  font-size: 1rem;
  font-weight: bold;
  padding: ${spacing.small} ${spacing.medium};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ danger }) =>
      danger ? colors.danger : colors.primary};
  }
`;