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
    // this.deleteItems = this.deleteItems.bind(this);
  }

  handleChange = event => {
    // console.log(event.target.value)
    this.setState({ 
      currentToDo: event.target.value
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

  // deleteItems = (key) => {
  //   const filteredItems = this.state.todos.filter(taskName =>
  //     taskName.key !== key);
  //     // this.state.todos = filteredItems
  //     // console.log(this.state.key)
  //     this.setState ({
  //       todos: filteredItems
  //     })
  // }

  render() {
    return (
      <div className="container">
        <h2>My Todo's'</h2>
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add todo here!"/>
          <button type="submit">Add Task</button>
        </form>

      {/*my list*/}
        <ul>
         {
           //map taskName to list item
         this.state.todos.map(taskName => <li key={taskName}>{taskName} 
          {/*create a button for each list item*/}
         <button type= "button" onClick={(key) => {
           //filter , return items that are not equal to the task name 
           let filteredItems = this.state.todos.filter(key =>
           taskName !== key);
            // set the state to the filtered items
        this.setState ({
        todos: filteredItems
        })
        console.log(this.state.todos)
        }}>
          delete
         </button></li> )
         }
        </ul>

      </div>
    )
  }
}

export default toDoList;