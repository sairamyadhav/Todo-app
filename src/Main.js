import React, { useState, useEffect } from "react";
import EmptyTask from "./EmptyTask";
import Task from "./Task";

function Main() {
  const [tasks, setTasks] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [newTask, setNewTask] = useState('')

  const handleClick = () => {
    setToggle(true);
  };

  const handleSubmit = () => {
    setTasks([...tasks, {completed: false, description: newTask}],
        tasks)
    setToggle(false);
  };

  const handleCancel = () => {
    setToggle(false);
  };

  const handleTextChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleUpdate = (index, task) => {
    tasks[index].description = task;
    setTasks([...tasks]);
  }

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((task, ind) => ind !== index);
    setTasks(updatedTasks);
  }

  const handleTaskComplete = (index) => {
    const completed = tasks[index].completed;
    tasks[index].completed = !completed;
    setTasks([...tasks])

  }

    return (
      <>
        <div>
            {tasks.length == 0 ? <EmptyTask /> : 
         tasks.map((task, index) => (
            <Task key={index} index={index} onUpdate={(task) => handleUpdate(index, task)} onDelete={() => handleDelete(index)} onComplete={() => handleTaskComplete(index)} task={task} />
          ))
         }
        </div>
        {toggle == false ? <button onClick={handleClick}>Add Task</button> :
        <div>
            <input type="text" onChange={handleTextChange} placeholder="add task" />
            <button disabled={newTask.length == 0} onClick={handleSubmit}>submit</button>
            <button onClick={handleCancel}>cancel</button>
        </div>
        }
        
      </>
    );
}

export default Main;
