(function() {
  'use strict'

  var vm01 = new Vue({
    el: '#app-01',
    data: { message: 'Hello world!' }
  })

  var vm02 = new Vue({
    el: '#app-02',
    data: {
      message: 'Hello',
      error: {
        require: false,
        tooLong: false
      }
    },
    watch: {
      message: function(newVal, oldVal) {
        this.error.require = (newVal.length < 1) ? true : false;
        this.error.tooLong = (newVal.length > 5) ? true : false;
      }
    }
  })

  var vm03 = new Vue({
    el: '#app-03',
    data: { message: 'Hello!' }
  })

  var vm04 = new Vue({
    el: '#app-04',
    data: {message: '<b>Hello!</b>'}
  })

  var vm05 = new Vue({
    el: '#app-05',
    data: {seen: true},
    methods: {
      change: function(e) {
        this.seen = e.target.checked
      }
    }
  })

})()
