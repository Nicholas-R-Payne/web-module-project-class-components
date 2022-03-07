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
    this.props.handleAdd('Take out trash')
  }

  handleChange = (evt) => {
    this.setState({
      ...this.state,
      input: evt.target.value
    })
  }

  render() {
    console.log(this.state.input)
    return (
      <form>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form;