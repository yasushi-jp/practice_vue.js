var vm = new Vue({
  el: '#app',
  data: {
    todos: [
      {completed: true, text: 'task 1'},
      {completed: false, text: 'task 2'}
    ]
  },
  methods: {
    completeAll: function() {
      this.todos.forEach(function(todo) {
        todo.completed = true
      })
    }
  }
});
