import React, { useState } from 'react'

export default function TodoApp() {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    const handleAdd = () => {
        console.log('TodoAdded', todo);
        if (todo.trim() === '') return;
        setTodos([...todos, { text: todo, isEditing: false, editText: todo }])      // this was a Editable Feature
        setTodo(''); //Clear Input
    }

    const handleDelete = (idxToDelete) => {
        const updateTodos = todos.filter(
            (_, index) => index !== idxToDelete
        )
        setTodos(updateTodos)
    }


    const handleEdit = (editIdx) => {
        const updateTodos = [...todos]
        updateTodos[editIdx].isEditing = true
        updateTodos[editIdx].editText = updateTodos[editIdx].text
        setTodos(updateTodos)
    }

    const handleEditInputChange = (e, idx) => {
        const updateTodos = [...todos]
        updateTodos[idx].editText = e.target.value
        setTodos(updateTodos)
    }


    const handleSave = (idx) => {
        const updateTodos = [...todos]
        updateTodos[idx].text = updateTodos[idx].editText;
        updateTodos[idx].isEditing = false;
        setTodos(updateTodos)
    }

    return (
        <div>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter the Todo' />
            <button onClick={handleAdd}>Add Todo</button>
            <ul>
                {
                    todos.map((item, idx) => (
                        <li key={idx}>
                            {item.isEditing ? (
                                <>
                                    <input type="text" value={item.editText} onChange={(e) => handleEditInputChange(e, idx)} />
                                    <button onClick={() => handleSave(idx)}>Save</button>
                                </>
                            ) : (
                                <>
                                    {item.text}
                                    <button onClick={() => handleEdit(idx)}>Edit</button>
                                </>
                            )}
                            <button onClick={() => handleDelete(idx)}>❌</button>
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}


