let app = new Vue({
  el: '#app',
  data: {
    tasks: [
      {id: 1, name: 'Tehtävä 1', description: 'Opiskele Rails', completed: false},
      {id: 2, name: 'Tehtävä 2', description: 'Opiskele VueJS', completed: false}, 
      {id: 3, name: 'Tehtävä 3', description: 'Suorita pakolliset opinnot', completed: true}, 
      {id: 4, name: 'Tehtävä 5', description: 'Hanki työharjoittelupaikka', completed: true} 
    ],
    message: 'Hello World!'
  },
  computed: {
    completedTasks: function() {
      console.log("test")
      return this.tasks.filter( item => item.completed == true);
    },
    todoTasks: function() {
      return this.tasks.filter(item => item.completed == false);
    }
  }
})

