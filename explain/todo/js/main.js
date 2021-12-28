Vue.component('todo-item', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: '<div>' +
    '<input type="checkbox" v-model="todo.comleted">' +
    '<span>{{ todo.text }}</span>' +
    '<button type="button" v-on:click="onClickRemove">削除</button>' +
    '</div>',
  methods: {
    onClickRemove: function() {
      this.$emit('remove')
    }
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    input: '',
    todos: [
      {comleted: true, text: 'Task1'},
      {comleted: false, text: 'Task2'}
    ]
  },
  methods: {
    addTodo: function() {
      this.todos.push({
        comleted: false,
        text: this.input
      })
      this.input = ''
    }
  }
});
