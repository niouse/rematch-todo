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
      console.log(payload.currentTarget.value)
      return { ...state, newTodo: payload.currentTarget.value }
    },
  },
  effects: (dispatch) => ({
    async populate(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 600))
      todos.forEach(dispatch.appModel.addTodo)
    }
  })
}