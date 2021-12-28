var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    oldMessage: '',
    newMessage: ''
  },
  watch: {
    message: function(newvalue, oldvalue) {
      this.oldMessage = oldvalue
      this.newMessage = newvalue
    }
  }
});
