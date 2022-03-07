import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.handleAdd(this.state.input)
    this.setState({
      input: ''
    })
  }

  handleChange = (evt) => {
    this.setState({
      ...this.state,
      input: evt.target.value
    })
  }

  render() {
    return (
      <form>
        <input value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form;