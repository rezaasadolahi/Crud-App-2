//* Components
import EditForm from './EditForm'
import ToggleStateHook from './CustomHooks/ToggleStateHook'





function TodoItem({ item, handleCheckbox, deleteTodo, editTodo }) {
    const [istoggle, handleToggle] = ToggleStateHook(false)


    return (
        <div className="d-flex  mb-4 div-TodoItem">
            <ul className="h4" style={{ textDecoration: item.doChecked ? 'line-through' : 'none' }}>
                <input type="checkbox" className="custom-checkbox" checked={item.doChecked}
                    onClick={() => handleCheckbox(item.id)}
                    readOnly
                />

                {
                    istoggle ? <EditForm
                        editTodo={editTodo}
                        id={item.id}
                        task={item.task}
                        handleToggle={handleToggle}
                    /> : <li className="mx-2">{item.task}</li>
                }
            </ul>

            <span>
                <button className="btn btn-primary Edit" onClick={handleToggle}>Edit</button>
                <button className="btn btn-danger Delete mx-1" onClick={() => deleteTodo(item.id)}>Delete</button>
            </span>
        </div>
    )
}


export default TodoItem
