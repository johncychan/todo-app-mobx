import { observer } from 'mobx-react'
import React, { useState } from "react";

const AddTodo = observer(({store}) => {
    const [value, setValue] = useState('');
    return (
        <div style={ { display: 'flex' } }>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button
                onClick={() => {
                    store.addTodo(value);
                    setValue('');
                }}
            >Add task</button>
        </div>
    )
});

export default AddTodo;
