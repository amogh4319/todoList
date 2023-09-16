

import React,{useState} from 'react';
import { Button } from 'react-bootstrap';


function Todo({task}) {
//      // State to track the completion status of tasks and tasks themselves
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
            
             
            <Button variant="danger">
              DELETE
            </Button>
    </div>
  );
}

export default Todo;
