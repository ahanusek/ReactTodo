var React = require('react');
import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');
var uuid = require('node-uuid')
var moment = require('moment');


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
		var now = moment();
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false,
					date: now.unix(),
					completedAt: undefined
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
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		return (
			<div className="medium-6 medium-offset-3 columns">
				<div className="todo-container">
					<TodoSearch onSearch={this.handleSearch}/>
					<TodoList />
					<AddTodoForm onFormSubmit={this.handleAddTodo}/>
				</div>
			</div>
		)
	}
});


module.exports = TodoApp;
