import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



const todoItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: todoItems
    };
  }

  toggleCompleted = clickedId => {
    const newTasks = this.state.todoItems.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    this.setState({
      todoItems: newTasks
    });
  };

  addNewTask = itemText => {
    const newTask = {
      id: Date.now(),
      task: itemText,
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newTask]
    });
  };

  removeTask = () => {
    const newTodo = this.state.todoItems.filter(item =>
      item.completed === false
    )
    this.setState({
      todoItems: newTodo
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTask={this.addNewTask} listItems={this.state.todoItems} tasks={this.state.todoItems} />
        <TodoList listItems={this.state.todoItems} toggleTask={this.toggleCompleted} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
