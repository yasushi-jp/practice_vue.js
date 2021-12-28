Vue.component('todo-item', {
  props: ['todo'],
  template: '<div>' +
    '<input type="checkbox" v-model="todo.completed">' +
    '<span>{{ todo.text}}</span>' +
    '</div>'
});

var vm = new Vue({
  el: '#app',
  data: {
    todos: [
      {completed: true, text: 'task 1'},
      {completed: false, text: 'task 2'}
    ]
  }
});
