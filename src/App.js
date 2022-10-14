import React, { useState } from 'react'
//* Components
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'




function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      task: 'practice programmer',
      doChecked: true
    }
  ])

  //* AddTask
  const addTodo = (newTask) => {
    const updateTodo = [
      ...todo,
      {
        id: Math.random() * 1000,
        task: newTask,
        doChecked: false
      }
    ]
    setTodo(updateTodo)
  }

  //* Checkbox item
  const handleCheckbox = (getId) => {
    const updateTodo = todo.map(item =>
      item.id === getId ? { ...item, doChecked: !item.doChecked } : item)
    setTodo(updateTodo)
  }

  //* Delete item
  const deleteTodo = (getId) => {
    const updateTodo = todo.filter(item => item.id !== getId)
    setTodo(updateTodo)
  }

  //* Edit item
  const editTodo = (getId, newTodo) => {
    const updateTodo = todo.map(item =>
      item.id === getId ? { ...item, task: newTodo } : item
    )
    setTodo(updateTodo)
  }




  return (
    <div className="card w-50 p-3 pb-5 m-5 mx-auto">
      <TodoForm addTodo={addTodo} />
      <TodoList todo={todo} handleCheckbox={handleCheckbox} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  )
}


export default App
