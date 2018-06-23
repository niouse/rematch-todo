import React, { Component } from 'react';
import { Button, InputGroup, Label, Spinner } from "@blueprintjs/core";
import { Flex } from 'grid-styled';
import TodoItem from './todo-item.screen';

class TodoScreen extends Component {


    componentDidMount(){
        this.props.populate()
    }

    addTodo = () => this.props.addTodo({
        title : this.props.newTodo,
        status : false
    })

    handleChange = e => this.props.handleChange(e.currentTarget.value)

    render(){
        const {
            todos, 
            newTodo, 
            handleChange,
            deleteTodo, 
            toggleStatus
        }=this.props
        return (
        <Flex flexDirection="column" alignItems="center">
        <h1>Todo app rematch and redux form yaeh</h1>
        <Flex>
          <Label text="Ajouter une todo à la liste" inline={true}>
              <InputGroup value={newTodo} onChange={this.props.handleChange}/>
          </Label>
        <Button icon="add" onClick={this.addTodo}/>
      </Flex>
          {
              !todos[0] ?
              <Spinner /> :
              todos.map((item, index)=>{
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
    )}
} 

export default TodoScreen