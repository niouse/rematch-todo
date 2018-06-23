import React from 'react'
import { Button, Switch } from "@blueprintjs/core";
import { Flex, Box } from 'grid-styled';

const TodoItem = ({
    title, 
    status, 
    deleteTodo,
    toggleStatus,
    todoIndex}) => (
    <Flex  m={2} alignItems="center" justifyContent="center">
        <Switch inline={true} checked={status} onChange={()=>toggleStatus(todoIndex)}/>
        <Box width={240}>  {title} </Box>
        <Button icon="delete" onClick={()=>deleteTodo(todoIndex)}/>
    </Flex>
)

export default TodoItem

