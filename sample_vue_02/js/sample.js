  var vm = new Vue({
    el: '#app',
    data: {
      json_data: 'aaa'
    },
    methods: {
      exec: function () {
        axios.get('http://ip-api.com/json/')
          .then(response => {
            this.json_data = response.data
          })
          .catch(err => {
            console.error(err)
          })
        }
      }
  });
