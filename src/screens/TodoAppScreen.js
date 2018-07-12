import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItemScreen';

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const wrapperStyle = {
  display: "flex",
}

class TodoScreen extends Component {

  componentDidMount() {
    this.props.populate()
  }

  handleChange = e => this.props.handleChange(e.currentTarget.value)


  render() {
    const {
      todos,
      newTodo,
      addTodo,
      handleChange,
      deleteTodo,
      toggleStatus
    } = this.props
    return (
      <div style={containerStyle}>
        <h1>Todo app with rematch</h1>
        <div style={wrapperStyle}>
          <label htmlFor="text-input"> Ajouter une todo à la liste  </label>
          <input
            id="text-input"
            type="text"
            value={newTodo}
            onChange={handleChange} />
          <button onClick={addTodo}> add </button>
        </div>
        {
          !todos[0] ?
            <p>Loading data</p> :
            todos.map((item, index) => {
              return <TodoItem
                key={index}
                todoIndex={index}
                title={item.title}
                status={item.status}
                deleteTodo={deleteTodo}
                toggleStatus={toggleStatus}
              />
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
  populate: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
}