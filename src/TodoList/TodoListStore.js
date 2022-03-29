import { makeObservable, observable, action, computed, autorun } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class TodoListStoreImplement {
    todos = [];
    
    constructor()     {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
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
    
    addTodo(title) {
        const item = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        this.todos.push(item);
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
