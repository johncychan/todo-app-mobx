import { observer } from 'mobx-react'
import TodoListItem from './TodoListItem';
import React from "react";

const TodoView = observer(({store}) => {
	return (
        <>
            {store && store.todos && (
                <ul>
                    {store.todos.map((todo, index) => {
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
            )}
        </>
    );
});

export default TodoView;
