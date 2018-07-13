import todos from './../mocks/todos.json'

export const appModel = {
  state: {
    todos: [],
    newTodo: "",
  },
  reducers: {
    addTodo: (state) => {
      const newTodos = state.todos.slice(0)
      newTodos.push({title:state.newTodo, status:false})
      return { ...state, todos: newTodos }
    },
    initTodos : (state, todos) => ({...state, todos:todos}),
    deleteTodo: (state, payload) => {
      const newTodos = state.todos.slice()
      newTodos.splice(payload, 1)
      return { ...state, todos: newTodos }
    },
    toggleStatus: (state, payload) => {
      const newTodos = state.todos.slice()
      newTodos[payload].status = !newTodos[payload].status
      return { ...state, todos: newTodos }
    },
    handleChange: (state, payload) => {
      return { ...state, newTodo: payload }
    },
  },
  effects: (dispatch) => ({
    async fetchTodos(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 600))
      dispatch.appModel.initTodos(todos)
    }
  })
}