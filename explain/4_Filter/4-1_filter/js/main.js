Vue.filter('excited', function(value) {
    return value + '!!!'
})

var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello World'
  }
});
