"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from 'react-bootstrap';

function DeleteTask(props) {
    const router=useRouter();
    console.log(props.id);
    const deleteRecord=async()=>{
        const res=await fetch('http://localhost:3000/api/tasklist/'+props.id,{
            method:'DELETE'
        });
       const data=await res.json();
         if(data.success){
            alert("task is deleted");
            router.push("/")
         }
    }

  return (
    <div>
      <Button variant='danger' onClick={deleteRecord}>DELETE</Button>
    </div>
  );
}

export default DeleteTask;
