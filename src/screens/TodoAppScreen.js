import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, InputGroup, Label, Spinner } from "@blueprintjs/core";
import { Flex } from 'grid-styled';
import TodoItem from './TodoItemScreen';

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
      <Flex flexDirection="column" alignItems="center">
        <h1>Todo app rematch and redux form yaeh</h1>
        <Flex>
          <Label text="Ajouter une todo à la liste" inline>
            <InputGroup value={newTodo} onChange={handleChange} />
          </Label>
          <Button icon="add" onClick={addTodo} />
        </Flex>
        {
          !todos[0] ?
            <Spinner /> :
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
      </Flex>
    )
  }
}

export default TodoScreen

TodoScreen.propTypes = {
  todos: PropTypes.array.isRequired,
  newTodo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  deleteTodo : PropTypes.func.isRequired,
  populate : PropTypes.func.isRequired,
  addTodo : PropTypes.func.isRequired
}