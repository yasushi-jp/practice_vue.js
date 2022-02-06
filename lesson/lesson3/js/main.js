var vm = new Vue({
  el: '#app',
  data: {                       // （１）
    items: ['HTML', 'CSS', 'JavaScript'],
    input: ''
  },
  methods: {                    // （２）
    addItem: function(item) {   // （３）
      this.items.push(item)     // （４）
      this.input = ''           // （５）
    }
  }
});
