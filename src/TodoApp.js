import React from 'react';
import { Provider, connect } from 'react-redux'
import TodoScreen from './screens/TodoAppScreen'
import { init } from '@rematch/core';
import * as models from './models/todo-app';

const store = init({
  models,
});

const mapState = state => {
  return {
    todos: state.appModel.todos,
    newTodo : state.appModel.newTodo
  }
};

const mapDispatch = dispatch => {
  return {
    addTodo : dispatch.appModel.addTodo,
    deleteTodo : dispatch.appModel.deleteTodo,
    toggleStatus : dispatch.appModel.toggleStatus,
    handleChange : dispatch.appModel.handleChange,
    fetchTodos : dispatch.appModel.fetchTodos,
  }
}

const TodoScreenWithProps = connect(mapState, mapDispatch)(TodoScreen)

const App = (
  <Provider store={store}>
    <TodoScreenWithProps />
  </Provider>
)
 
export default App
