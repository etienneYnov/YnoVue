new Vue({
  el: '#app',
  data: {
    user: [],
    search: 'masonfox'
  },
  methods: {
    searchGH: function() {
      var username = this.search.toLowerCase();
      var route = 'https://api.github.com/users/' + username;
      console.log(route);
      // send api request
      this.$http.get(route).then((response) => {
        // success callback
        console.log(response.data);
        this.user = response.data;
      }, (response) => {
        // error callback
      });
    }
  }, 
  ready: function() {
    this.searchGH();
  }
});