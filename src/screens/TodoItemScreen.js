import React from 'react'
import PropTypes from 'prop-types'

import { Button, Switch } from "@blueprintjs/core";
import { Flex, Box } from 'grid-styled';

const TodoItem = ({
  title,
  status,
  deleteTodo,
  toggleStatus,
  todoIndex }) => (
  <Flex
    m={2}
    alignItems="center"
    justifyContent="center">
    <Switch inline checked={status} onChange={() => toggleStatus(todoIndex)} />
    <Box width={240}>  {title} </Box>
    <Button icon="delete" onClick={() => deleteTodo(todoIndex)} />
  </Flex>
)

export default TodoItem

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  todoIndex: PropTypes.number.isRequired
}

