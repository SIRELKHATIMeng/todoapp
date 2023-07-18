import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue('');
  };
 
  const handleDone = (i) => {
    const updatedTodos = [...todos];
    updatedTodos[i] = `✔️  ${updatedTodos[i]}`;
    setTodos(updatedTodos);
    
      }

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              placeholder="Add Todo"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {todos.map((todo, i) => (
              <li key={i} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-4 sm:px-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">{todo}</div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <button
                      onClick={() => handleDone(i)}
                      className="bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;