"use client"
import React, { useState } from 'react';

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [MainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...MainTask, {title, desc}]);
    settitle("");
    setdesc("");
    console.log(MainTask);
 }

 const deleteHandler = (i) => {
  let copytask = [...MainTask]
  copytask.splice(i,1)
  setMainTask(copytask)
 }

  let renderTask = <h2>No Task Avilable</h2>
  
  if (MainTask.length > 0) {
    renderTask = MainTask.map((t, i) => {
      return (
        <li key = {i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button onClick={ () => {
        deleteHandler(i)
      }}
      className='px-4 py-2 bg-red-400 text-white font-bold rounded'>Delete</button>
      </li>
      );
    });
  }
  
  return (
    <div>
     <h1 className='text-5xl bg-black text-white p-5 font-bold text-center'>Sonia's Todo List</h1> 
     <form onSubmit = {submitHandler}>
      <input type='text' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 rounded'
      placeholder='Enter Title here'
      value={title}
      onChange = {(e) => {
        settitle(e.target.value)
      }}
      />

     <input type='text' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 rounded'
      placeholder='Enter Description here'
      value={desc}
      onChange = { (e) => {
        setdesc(e.target.value)
      }}
      />

      <button className='bg-zinc-700 text-white px-4 py-3 font-bold rounded'>Add Task</button>
     </form>
     <hr/>
     <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
     </div>
    </div> 
  );

}

export default page;
