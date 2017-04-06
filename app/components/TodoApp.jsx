var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: "Tidy a room"
				},
				{
					id: 3,
					text: "Watch a game"
				},
				{
					id: 4,
					text: "Feed a cat"
				}
			],
			showCompleted: false,
			searchText: ""
		}
	},
	handleAddTodo: function(text){
		alert('new todo: ' + text);
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
					<TodoList todos={todos}/>
					<AddTodoForm onFormSubmit={this.handleAddTodo}/>
				</div>
			</div>
		)
	}
});


module.exports = TodoApp;
