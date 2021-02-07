import React from 'react';
import './App.css';
import Input from './components/Input/Input'
import TodoItem from './components/TodoItem/TodoItem';

import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
           {
             todoList.map(value => (
               <TodoItem 
                item={value.item} 
                done={value.done} 
                id={value.id}
                key={value.id}
              />
             ))
           }
        </div>

        <Input />
      </div>
    </div>
  );
}

export default App;
