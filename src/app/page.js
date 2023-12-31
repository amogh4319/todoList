

import TodoForm from './TodoForm'
import TodoList from './TodoList'

import { Fragment} from 'react'
async function getData() {
  const res = await fetch('http://localhost:3000/api/tasklist ',{ cache: 'no-cache' })
 console.log(res);
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
 
  return res.json();

}
 


export  default  async function Home() {

const data=await getData();
console.log(data);

   return (
    <Fragment>
    
      <TodoForm taskList={data}/>
      <TodoList taskList={data} />
      
    </Fragment>
     )
    
}
