import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Todos:</h2>

        <ul>
          <li>Walk the dog</li>
          <li>Learn React</li>
          <li>Have fun</li>
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
