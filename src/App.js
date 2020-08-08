import React, {Component} from 'react'

class toDoList extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChange = event => {
    // console.log(event.target.value)
    this.setState({ 
      currentToDo: event.target.value,
    })
  };

  addItem = event => {
    event.preventDefault();
    // console.log("additem Method fired")
    const newItem = this.state.currentToDo;
 
    console.log(this.state)
    if(newItem.currentToDo !== "") {
      this.state.todos.push(newItem)
      this.setState({ 
        currentToDo: this.state.currentToDo = ""
      })
    }
  };

  render() {
    return (
      <div className="container">
        
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add todo here!"/>
          <button type="submit">Add Task</button>
        </form>

        <ul>
         {this.state.todos.map(taskName => <li key={taskName}>{taskName}</li>)}
        </ul>

      </div>
    )
  }
}

export default toDoList;