import React, { Component } from 'react';
import PropTypes from 'prop-types'

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const wrapperStyle = {
  display: "flex",
}

const itemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "2px"
}

const textInputStyle = {
  width: "240px"
}

class TodoScreen extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  handleChange = (e) => this.props.handleChange(e.currentTarget.value)

  render() {
    const {
      todos,
      newTodo,
      addTodo,
      deleteTodo,
      toggleStatus
    } = this.props
    return (
      <div style={containerStyle}>
        <h1>Todo app with rematch</h1>
        <div style={wrapperStyle}>
          <label htmlFor="text-input"> Ajouter une todo à la liste :  </label>
          <input
            id="text-input"
            type="text"
            value={newTodo}
            onChange={this.handleChange} />
          <button onClick={addTodo}> add </button>
        </div>
        {
          !todos[0] ?
            <p>Loading data</p> :
            todos.map((item, index) => {
              return (
                <div key={'todo-input'+index} style={itemStyle}>
                  <input
                    type="checkbox"
                    checked={item.status}
                    onChange={() => toggleStatus(index)} />
                  <span style={textInputStyle}> {item.title} </span>
                  <button onClick={() => deleteTodo(index)}> delete </button>
                </div>
              )
            })}
      </div>
    )
  }
}

export default TodoScreen

TodoScreen.propTypes = {
  todos: PropTypes.array.isRequired,
  newTodo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
}