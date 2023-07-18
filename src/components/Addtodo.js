import React, { useState } from 'react';

function AddTodo() {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', title);
    setTitle('');
  };

  return (
    <div>
      <h1>Add To-Do</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter to-do item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;