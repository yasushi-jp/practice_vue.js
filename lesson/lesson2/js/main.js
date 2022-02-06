var vm = new Vue({
  el: '#app',
  data: {
    firstName: 'yasushi',
    lastName: 'jp',
    oldName: '',  // （１）
    newName: ''   // （２）
  },
    computed: {
    getName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {    // （３）
    getName: function(newVal, oldVal) {   // （４）
      this.oldName = oldVal;    // （５）
      this.newName = newVal;    // （６）
    }
  }
});
