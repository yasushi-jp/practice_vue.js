Vue.filter('excited', function(value, moreExcited) {
    return (moreExcited ? value.toUpperCase() : value) + '!!!'
})

var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello World'
  }
});
