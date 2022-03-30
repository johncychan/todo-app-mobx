import { makeObservable, observable, action, computed, autorun } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class TodoListStoreImplement {
    todos = [];
    mode = 'all'
    
    constructor()     {
        makeObservable(this, {
            todos: observable,
            mode: observable,
            addTodo: action,
            editTodo: action,
            toggleComplete: action,
            deleteTodo: action,
            status: computed,
        });
        
        autorun(() => {
            return console.log(
                this.todos.reduce((acc, todo) => {
                    const { id, ...rest } = todo;
                    return {...acc, [id]: rest};
                }, [])
            );
        })
    }
    
    todosList() {
        switch(this.mode) {
            case 'completed':
                return this.todos.filter(t => t.completed);
            case 'uncompleted':
                return this.todos.filter(t => !t.completed);
            default:
                return this.todos;
        }
    }
    
    addTodo(title) {
        const item = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        this.todos.push(item);
    }
    
    editTodo(title, id) {
        const index = this._getTodoIndex(id);
        this.todos[index].title = title;
    }

    toggleComplete(id) {
        const index = this._getTodoIndex(id);
        this.todos[index].completed = !this.todos[index].completed;
    }
    
    deleteTodo(id) {
        const index = this._getTodoIndex(id);
        if (index > -1) this.todos.splice(index, 1);
    }
    
    _getTodoIndex(id) {
        return this.todos.findIndex(t => t.id === id);
    }
    
    get status() {
        let completed = 0;
        let remaining = 0;
        
        this.todos.forEach(todo => {
            if (todo.completed) {
                completed++
            }
            remaining++;
        })
        
        return {completed, remaining}
    }
}

export const TodoListStore = new TodoListStoreImplement();
