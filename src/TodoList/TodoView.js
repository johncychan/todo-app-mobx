import { observer } from 'mobx-react'
import { action } from 'mobx';
import TodoListItem from './TodoListItem';
import React from "react";

const TodoView = observer(({store}) => {
	return (
        <>
            {store && store.todos && (
                <>
                    <button onClick={action(() => store.mode = "all")} style={{color: store.mode === "all" ? "black" : ''}}>All</button>
                    <button onClick={action(() => store.mode = "completed")} style={{color: store.mode === "completed" ? "black" : ''}}>Completed</button>
                    <button onClick={action(() => store.mode = "uncompleted")} style={{color: store.mode === "uncompleted" ? "black" : ''}}>Uncompleted</button>
                    <ul>
                        {store.todosList().map((todo, index) => {
                            return (
                                <TodoListItem
                                    todo={todo}
                                    onRemove={() => store.deleteTodo(todo.id)}
                                    onToggle={() => store.toggleComplete(todo.id)}
                                    onEdit={title => store.editTodo(title, todo.id)}
                                    key={index}
                                />
                            )
                        })}
                    </ul>
                </>
            )}
        </>
    );
});

export default TodoView;
