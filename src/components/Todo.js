import React from 'react'

export default function Todo({todo,toggleInput}) {

    function handleCheckbox(){
        toggleInput(todo.id);
    }
    return (
        <li>
            <label>
                {todo.name}
            </label>
            <input type="checkbox" onClick={handleCheckbox} checked={todo.checked}/>
        </li>
        
    )
}
