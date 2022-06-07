import React from 'react'
import './TodoItem.css';
import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleCheck, deleteTodo } from './todoSlice';

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  
  const handleCheck = () => {
    dispatch(toggleCheck(id))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className='todoItem'>
        <Checkbox
            checked={done}
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'controlled' }}
        />

        
        <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>Delete</button>

        <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItem