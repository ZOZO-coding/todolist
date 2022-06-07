import React, { useState } from 'react';
import './input.css';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todo/todoSlice';

const Input = () => {
  const [input, setInput] = useState('');  
  const dispatch = useDispatch();
  
  const addTodo = (e) => {
    e.preventDefault();

    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }));

    setInput('');
  }
  
  return (
    <div className='input'>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
        <button type="button" class="btn btn-outline-success" onClick={addTodo}>Add</button>
    </div>
  )
}

export default Input