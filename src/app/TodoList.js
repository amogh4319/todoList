"use client"

import { ListGroup } from 'react-bootstrap';
import './TodoList.css'
import Todo from './Todo';
function TodoList(props) {
 
  

  //this will reload the page without doing S
  
  return (
    <div>
      <ListGroup as="ol" variant="info" className="p-4" style={{ width: '75%', marginLeft: '10%' }}>
        {props.taskList.map((task) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start shadow mt-3"
            key={task._id}
            
          >
            <Todo task={task}/>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
