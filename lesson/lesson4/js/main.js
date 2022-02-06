var vm = new Vue({
  el: '#app',
  data: {
    todos: [
      {isDone: false, name: 'Task1'},
      {isDone: false, name: 'Task2'},
      {isDone: false, name: 'Task3'}
    ],
    input: ''
  },
  methods: {
    addTodo: function(input) {
      var todo = {
        isDone: true,
        name: input
      };
      this.todos.push(todo)
    },
    deleteTodo: function(index) {
      this.todos.splice(index, 1)
    }
  }
});
