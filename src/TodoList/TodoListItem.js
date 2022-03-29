import { observer } from 'mobx-react'
import React from "react";

const TodoListItem = observer(({todo, onRemove, onEdit, onToggle}) => {
    return (
        <li className="todoItems">
            <input type="checkbox" checked={todo.completed} onChange={onToggle} />
            <input type="text" value={todo.title} onChange={e => onEdit(e.target.value)}/>
            <div className="buttonGroup">
                <button onClick={onRemove}>Delete</button>
            </div>
        </li>
    );
});

export default TodoListItem;
