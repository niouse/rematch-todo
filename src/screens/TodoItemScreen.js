import React from 'react'
import PropTypes from 'prop-types'

const containerStyle = {
  display : "flex",
  alignItems : "center",
  justifyContent : "center",
  margin : "2px"
}

const textInputStyle = {
  width : "240px"
}

const TodoItem = ({
  title,
  status,
  deleteTodo,
  toggleStatus,
  todoIndex }) => (
  <div style={containerStyle}>
    <input 
      type="checkbox" 
      checked={status} 
      onChange={() => toggleStatus(todoIndex)} />
    <span style={textInputStyle}> {title} </span>
    <button  onClick={() => deleteTodo(todoIndex)}> delete </button>
  </div>
)

export default TodoItem

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  todoIndex: PropTypes.number.isRequired
}

