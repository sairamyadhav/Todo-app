import React, { useState } from "react";

function Task({ index, onUpdate, onDelete, onComplete, task }) {
  const [toggle, setToggle] = useState(false);
  const [newTask, setNewTask] = useState('')
  const handleClick = () => {
    console.log('af');
    setToggle(true);
  };
  const handleCancel = () => {
    setToggle(false);
  };
  const handleSubmit = () => {
    onUpdate(newTask);
    setToggle(false);
  };
  const handleTextChange = (event) => {
    setNewTask(event.target.value);
  };
  console.log(task.completed);
  console.log(task.description);
  return (
    <>
      <div>
        <input onChange={onComplete} type="checkbox" checked={task.completed} />
        <h1>{task.description}</h1>
        {toggle == false ? (
          <button disabled={task.completed} onClick={handleClick}>Updatee</button>
        ) : (
          <div>
            <input
              type="text"
              onChange={handleTextChange}
              placeholder="add task"
            />
            <button disabled={newTask.length == 0} onClick={handleSubmit}>
              submit
            </button>
            <button onClick={handleCancel}>cancel</button>
          </div>
        )}
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  );
}

export default Task;
