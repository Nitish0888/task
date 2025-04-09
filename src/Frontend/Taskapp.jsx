import React, { useState } from 'react';
import './taskapp.css';
import TaskItem from './Taskitem';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = () => {
    if (title.trim() && description.trim()) {
      const newTask = {
        title,
        description
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="task-app">
      <h2>Task Manager</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskApp;
