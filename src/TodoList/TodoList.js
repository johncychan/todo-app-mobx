import { observer } from 'mobx-react'
// import { action } from 'mobx';
import React, { useState } from "react";
import './TodoList.css';

export const TodoList = observer(({listStore}) => {
    const [value, setValue] = useState('');
    
    return (
        <section>
            <h2 className="mainHeading">Todo List</h2>
            <h3>Add Item</h3>
            <div style={ { display: 'flex' } }>
                <input
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <button
                    onClick={() => {
                        listStore.addTodo(value);
                        setValue('');
                    }}
                >Add task</button>
            </div>
            <header className="todoListHeadning">
                <h3>Todo</h3>
                <label>{`${listStore.status.completed} / ${listStore.status.remaining} `}</label>
            </header>
            {listStore && listStore.todos && (
                <ul>
                    {listStore.todos.map((todo, index) => {
                        return (
                            // <TodoListItem todo={todo} onRemove={() => listStore.deleteTodo(todo.id)} key={index} />
                            <li className="todoItems" key={index}>
                                <input type="checkbox" checked={todo.completed} onChange={() => listStore.toggleCompleteTodo(todo.id)} />
                                <input type="text" value={todo.title} onChange={event => listStore.editTodo(todo.id, event.target.value)} />
                                <div className="buttonGroup">
                                    <button onClick={() => listStore.deleteTodo(todo.id)}>Delete</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )}
        </section>
    );
});

// const TodoListItem = observer(({todo, onRemove}) => {
//     const onToggleCompleted = () => {
//         todo.completed = !todo.completed;
//     }
    
//     const onTitleChange = (event) => {
//         todo.title = event.target.value;
//     }
    
//     return (
//         <li className="todoItems">
//             <input type="checkbox" checked={todo.completed} onChange={action(onToggleCompleted)} />
//             <input type="text" value={todo.title} onChange={action(onTitleChange)}/>
//             <div className="buttonGroup">
//                 <button onClick={onRemove}>Delete</button>
//             </div>
//         </li>
//     );
// });
