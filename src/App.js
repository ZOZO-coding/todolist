import React, {useState} from 'react';
import './App.css';
import Input from './components/input.js';
import TodoItem from './features/todo/TodoItem';
import Calculator from './features/calculator/Calculator';
import Navbar from './components/navbar';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todo/todoSlice';
import axios from 'axios';

function App() {
  const todoList = useSelector(selectTodoList);
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9f740cb776f2b8965a0bb5cbe291361d`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('');
    }
  }

  return (
    <div className="App">
      <div className='Navbar'>
        <Navbar />
      </div>
      
      <div className='app_weatherContainer'>
        <div className='search'>
          <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location...'
          type='text'/>
        </div>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()} &deg;F</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
          
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p> Feels Like {data.main.feels_like.toFixed()} &deg;F</p> : null}
          </div>
          <div className='humidity'>
          {data.main ? <p>Humidity {data.main.humidity}</p> : null}
          </div>
          <div className='wind'>
          {data.wind ? <p>Wind Speed {data.wind.speed}</p> : null}
          </div>
        </div>
      </div>

      <div className="app_container">
        <h1 className='title'>Spring's To-Do List</h1>
        <div className='app_todoContainer'>
          {
            todoList.map(item => (
              <TodoItem 
              name={item.item} 
              done={item.done}
              id={item.id}
              />
            ))
          }
        </div>
        <Input />
      </div>

      <Calculator />
    </div>
  );
}

export default App;
