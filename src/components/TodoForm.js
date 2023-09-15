"use client"
import {useState} from 'react';
import { Button, InputGroup,Form } from 'react-bootstrap';
import React from 'react';


function TodoForm(props) {
    const [taskname,setTaskname]=useState('');
    const submission=(event)=>{
        event.preventDefault();
        props.onAdd(taskname);
        setTaskname('');
    }
  return (
    <div style={{textAlign:'center'}}>
      <h1>To-do List</h1>
      <Form onSubmit={submission }>
      <InputGroup className="mb-5 shadow" style={{width:'75%',marginLeft:'10%'}}>
        <Form.Control
          placeholder="Add your task"
          aria-label="Add your task"
          aria-describedby="basic-addon2"
          value={taskname}
          onChange={(e)=>setTaskname(e.target.value)}
          className='shadow'
        />
        <Button variant="outline-secondary" id="button-addon2" type='submit'>
          + Add
        </Button>
      </InputGroup>
      </Form>
    </div>
  );
}

export default TodoForm;
