import React from 'react'

class Todo extends React.Component {
  render(){
    return(
      <li>
        {this.props.todo.name} { this.props.todo.completed ? <span>completed</span> : <span></span> }
      </li>
    )
  }
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: true
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  render() {
    const { todos } = this.state

    return (
      <div>
        <h2>Todos:</h2>

        <ul>
          {
            todos.map(todo => {
              return (<Todo todo={todo} key={todo.id} />)
            })
          }
        </ul>

        <form>
          <input />
          <button>Submit</button>
        </form>

        <button>Hide Completed</button>
      </div>
    )
  }
}
