import React from 'react';
import { Provider, connect } from 'react-redux'
import TodoScreen from './screens/todos.screen'
import { init } from '@rematch/core';
import * as models from './models/app.model.js';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

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
    populate : dispatch.appModel.populate,
  }
}

const TodoScreenWithProps = connect(mapState, mapDispatch)(TodoScreen)

const App = (
  <Provider store={store}>
    <TodoScreenWithProps />
  </Provider>
)
 
export default App
