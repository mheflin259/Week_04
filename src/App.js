import React, { Component } from "react";

import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    todoListTitle: "My Todo List",
    todos: ["Walk to latea", "Get boba"]
  };

  addParameter = () => {
    this.setState({
      todos: [...this.state.todos, "Get more boba"]
    })
  };

  deleteTitle = () => {
    this.setState({
      todoListTitle: ""
    })
  };

  deleteAllTodos = () => {
    this.setState({
      todos: []
    })
  };

  render() {
    return (
      <div>
        <h1>{this.state.todoListTitle}</h1>
        <button onClick={this.deleteTitle}> Delete title </button>
        {this.state.todos.map(x => (
          <ToDoListItem todo={x} />
        ))}
        <button onClick={this.deleteAllTodos}> Delete all todos </button>
        <button onClick={this.addParameter}> Add todo</button>
      </div>
    );
  }
}

export default App;
