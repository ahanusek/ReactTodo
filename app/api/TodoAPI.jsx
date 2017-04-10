var $ = require('jQuery');

module.exports = {
	setTodos: function(todos){
		if($.isArray(todos)){
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function(){
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {

		};
		return $.isArray(todos) ? todos : [];
	},
	filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
		filteredTodos = filteredTodos.filter(todo => {
			var todoText = todo.text.toLowerCase();
			if(searchText === "" || searchText === undefined){
				return todo;
			}

			if(todoText.indexOf(searchText) > -1){
				return todo;
			}
		});

    // Sort todos with non-completed first
		filteredTodos = filteredTodos.sort((todoA,todoB) => {
			if(!todoA.completed && todoB.completed){
				return -1;
			} else if(todoA.completed && !todoB.completed){
				return 1;
			} else {
				return 0;
			}
		});

    return filteredTodos;
  }
};
