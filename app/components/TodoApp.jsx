var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');
var uuid = require('node-uuid')


var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos: TodoAPI.getTodos(),
			showCompleted: false,
			searchText: ""
		}
	},
	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},
	handleAddTodo: function(text){
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		})
	},
	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id){
				todo.completed = !todo.completed;
			}
			return todo;
		});

		this.setState({todos: updatedTodos});
	},
	handleSearch: function(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},
	render: function(){
		var {todos} = this.state;
		return (
			<div className="medium-6 medium-offset-3 columns">
				<div className="todo-container">
					<TodoSearch onSearch={this.handleSearch}/>
					<TodoList todos={todos} onToggle={this.handleToggle}/>
					<AddTodoForm onFormSubmit={this.handleAddTodo}/>
				</div>
			</div>
		)
	}
});


module.exports = TodoApp;
