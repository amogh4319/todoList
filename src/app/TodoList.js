"use client"
import { useState } from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import './TodoList.css'
import Todo from './Todo';
import DeleteTask from '@/lib/DeleteTask';
import { useRouter } from 'next/navigation';

function TodoList(props) {
 const [todos,setTodos]=useState(props.taskList);
 const router=useRouter();
  const toggleTodo=async(id,isDone)=>{
    const response=await fetch('http://localhost:3000/api/tasklist/'+id,{
        method:'PUT',
        body:JSON.stringify({id,isDone:!isDone}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    if(response.status===200){
        setTodos(todos.map((todo)=>todo.id===id? {...todos,isDone:!isDone}:todo))
        alert('task is completed')
        router.refresh();
      }
}

  

  
  
  return (
    <div>
      <ListGroup as="ol" variant="info" className="p-4" style={{ width: '75%', marginLeft: '10%' }}>
        {todos.map((task) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start shadow mt-3"
            key={task._id}
            
          >
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() =>toggleTodo(task._id,task.isDone)}
            />
            <div className={`ms-2 me-auto`}>
              <div className="fw-bold">{task.taskname}</div>
            </div>
            
           <DeleteTask id={task._id}/>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
