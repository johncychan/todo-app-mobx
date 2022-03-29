import { observer } from 'mobx-react'
import React from "react";
import TodoView from './TodoView';
import AddTodo  from './AddTodo';
import './TodoList.css';

export const TodoList = observer(({listStore}) => {
    return (
        <section>
            <h2 className="mainHeading">Todo List</h2>
            <h3>Add Item</h3>
            <AddTodo store={listStore} />
            <header className="todoListHeadning">
                <h3>Todo</h3>
                <label>{`${listStore.status.completed} / ${listStore.status.remaining} `}</label>
            </header>
            <TodoView store={listStore} />
        </section>
    );
});
