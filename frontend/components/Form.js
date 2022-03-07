import React from 'react'

class Form extends React.Component {
  handleSubmit = () => {
    console.log('submit')
  }
  render() {
    return (
      <form>
        <input />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form;