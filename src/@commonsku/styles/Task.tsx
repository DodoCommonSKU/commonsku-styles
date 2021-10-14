import styled from 'styled-components'
import React from 'react'
import {LabeledCheckbox} from './Input'
import { SharedStyles, SharedStyleTypes } from './SharedStyles'

const TaskLabel  = styled.div`display: flex;`
const TaskName   = styled.div`flex-grow: 1;`
const StyledTask = styled.div<SharedStyleTypes>`margin-bottom: 1.5em; ${SharedStyles}`
const TaskBody   = styled.div`margin-left:34px;`

const Task = (props: React.PropsWithChildren<{
  taskName: string,
  date?: string,
  done?: boolean,
  assignee?: string,
  taskBody: string | React.ReactNode
} & SharedStyleTypes>) => {
  return (
    <StyledTask {...props}>
      <LabeledCheckbox checked={false} label={
      <TaskLabel>
        <TaskName>{props.taskName}</TaskName>
        {props.date ? <div>{props.date}</div> : null}
      </TaskLabel>} />
      <TaskBody>{props.taskBody}</TaskBody>
      <div className="task-metadata">
        {typeof props.assignee !== "undefined" ? "for " + props.assignee! : null}
        {typeof props.assignee !== "undefined" ? "on " : null} 
      </div>
    </StyledTask>
  );
}

export {
  Task,
  StyledTask,
  TaskLabel,
  TaskName,
  TaskBody,
};
