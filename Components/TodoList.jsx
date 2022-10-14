import React from 'react'
//* Components
import TodoItem from './TodoItem'




function TodoList({ todo, handleCheckbox, deleteTodo, editTodo }) {
    return (
        <div className="mx-3">
            {
                todo.map(item =>
                    <TodoItem
                        key={item.id}
                        item={item}
                        doChecked={item.doChecked}
                        handleCheckbox={handleCheckbox}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />)
            }
        </div>
    )
}


export default TodoList
