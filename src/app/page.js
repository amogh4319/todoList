"use client";

import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'


import { useState,Fragment } from 'react'

export  default function Home() {
  const [taskList,setTaskList]=useState([]);
  const addHandler=(enteredTask)=>{
    setTaskList((prevTask)=>{
      return [...prevTask,{taskname:enteredTask,_id:Math.random().toString(),isCompleted:false}]
    });
  }
  const deleteHandler = (taskId) => {
    // Filter out the task with the given taskId from the taskList
    const updatedTaskList = taskList.filter((task) => task._id !== taskId);
    setTaskList(updatedTaskList);
  };

  return (
    <Fragment>
    
      <TodoForm onAdd={addHandler}/>
      <TodoList taskList={taskList} onDelete={deleteHandler}/>
      
    </Fragment>
    
    

  )
    
}
