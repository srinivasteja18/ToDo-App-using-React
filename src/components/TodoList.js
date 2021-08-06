import React from 'react'
import Todo from './Todo'

function TodoList({todos,toggleInput}) {
    return (
        <ul>
            {
            todos.map(todo =>
                 <Todo todo = {todo} toggleInput = {toggleInput} />
            )
            }
        </ul>
    );
}
export default TodoList