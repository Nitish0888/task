import React from 'react';
import './taskitem.css';

const TaskItem = ({ task, onDelete }) => {
  return (
    <li className="task-item">
      <div>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
