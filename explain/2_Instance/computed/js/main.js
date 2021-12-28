var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  },
  computed: {
    upperMessage: function() {
      return this.message.toUpperCase()
    }
  }
});
