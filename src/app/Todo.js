"use client"
import React,{useState} from 'react';

async function update(id,isDone){
    await fetch('http://localhost:3000/api/tasklist',{
        method:'POST',
        body:JSON.stringify({id,isDone})
    })
} 

function Todo({task}) {
    const [completedTasks, setCompletedTasks] = useState([]);
  

    // Function to toggle the completion status of a task
    const toggleTaskCompletion = (taskId) => {
      if (completedTasks.includes(taskId)) {
        setCompletedTasks(completedTasks.filter((id) => id !== taskId));
      } else {
        // If the task is not marked as completed, add it to the completedTasks array
        setCompletedTasks([...completedTasks, taskId]);
      }
    };
  return (
    <div>
      <input
              type="checkbox"
              checked={completedTasks.includes(task._id)}
              onChange={() => toggleTaskCompletion(task._id)}
            />
            <div className={`ms-2 me-auto ${completedTasks.includes(task._id) ? 'completed-task' : ''}`}>
              <div className="fw-bold">{task.taskname}</div>
            </div>
            
    </div>
  );
}

export default Todo;
