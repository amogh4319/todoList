import React,{useState} from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import './TodoList.css'; 

function TodoList(props) {
    // State to track the completion status of tasks
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
         
   <ListGroup as="ol" variant='info' className='p-4' style={{width:'75%',marginLeft:'10%'}}>
   {props.taskList.map((task)=>(
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start shadow mt-3"
        key={task._id}
        variant={completedTasks.includes(task._id) ? 'success' : 'warning'} // Change variant based on completion status
      >
        <input
              type="checkbox"
              checked={completedTasks.includes(task._id)} // Check the checkbox if the task is completed
              onChange={() => toggleTaskCompletion(task._id)} // Toggle completion status on checkbox change
            />
        <div className={`ms-2 me-auto ${completedTasks.includes(task._id) ? 'completed-task' : ''}`}>
          <div className="fw-bold" >{task.taskname}</div>
          
        </div>
        <Button variant='danger' onClick={()=>props.onDelete(task._id)}>
            DELETE
        </Button>
      </ListGroup.Item>
        ))}
         </ListGroup>   
               
          
        
      
    </div>
  );
}

export default TodoList;
