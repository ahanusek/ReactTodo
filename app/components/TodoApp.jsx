var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid')


var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog'
				},
				{
					id: uuid(),
					text: "Tidy a room"
				},
				{
					id: uuid(),
					text: "Watch a game"
				},
				{
					id: uuid(),
					text: "Feed a cat"
				}
			],
			showCompleted: false,
			searchText: ""
		}
	},
	handleAddTodo: function(text){
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text
				}
			]
		})
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
