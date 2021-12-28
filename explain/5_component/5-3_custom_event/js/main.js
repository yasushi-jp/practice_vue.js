Vue.component('todo-item', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: '<div>' +
    '<input type="checkbox"'' +
      'v-bind:checked="todo.completed" v-on:change="onChange">' +
    '<span>{{ todo.text}}</span>' +
    '</div>',
  methods: {
    onChange: function(event) {
      this.$emit('todo-change', this.todo.completed)
    }
  }
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
