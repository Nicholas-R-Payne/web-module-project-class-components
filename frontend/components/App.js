import React from 'react'
import Todo from './Todo'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
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
