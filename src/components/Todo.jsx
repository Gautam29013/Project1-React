import React, { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = (event) => {
    event.preventDefault()
    const trimmedValue = input.trim()

    if (!trimmedValue) {
      return
    }

    setTodos([...todos, { id: Date.now(), text: trimmedValue }])
    setInput('')
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  
  return (
    <section>
      <h2>Todo</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.length === 0 ? (
          <li>No todos yet.</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button type="button" onClick={() => removeTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

export default Todo