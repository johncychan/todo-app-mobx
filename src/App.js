import './App.css';
import { TodoList } from './TodoList/TodoList';
import { TodoListStore } from './TodoList/TodoListStore';

function App() {
    return (
        <div className="App">
            <TodoList listStore={TodoListStore}/>
        </div>
    );
}

export default App;
