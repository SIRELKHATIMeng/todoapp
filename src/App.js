import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/Addtodo';
import HomePage from './pages/Home';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddTodo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;