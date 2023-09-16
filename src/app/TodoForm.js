"use client"
import { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

function TodoForm(props) {
  const [taskname, setTaskname] = useState('');
  const router = useRouter();
  const [todos,setTodos]=useState(props.taskList)

  const submission = async (event) => {
    event.preventDefault();
    console.log(taskname);

    try {
      const res = await fetch('http://localhost:3000/api/tasklist', {
        method: 'POST',
        body: JSON.stringify({
          taskname: taskname,
          isDone: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('not able to post it');
      }
      const data=await res.json();
      
      console.log(data);

      setTodos([...todos,data]);
      router.refresh();
    } catch (error) {
      console.error(error.message);
    }

    setTaskname('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>To-do List</h1>
      <Form onSubmit={submission}>
        <InputGroup className="mb-5 shadow" style={{ width: '75%', marginLeft: '10%' }}>
          <Form.Control
            placeholder="Add your task"
            aria-label="Add your task"
            aria-describedby="basic-addon2"
            value={taskname}
            onChange={(e) => {
              setTaskname(e.target.value);
            }}
            className="shadow"
          />
          <Button variant="outline-secondary" id="button-addon2" type="submit">
            + Add
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default TodoForm;
