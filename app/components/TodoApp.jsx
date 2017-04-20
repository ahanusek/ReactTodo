var React = require('react');
import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');
var uuid = require('node-uuid')
var moment = require('moment');


var TodoApp = React.createClass({
	render: function(){
		return (
			<div className="medium-6 medium-offset-3 columns">
				<div className="todo-container">
					<TodoSearch/>
					<TodoList />
					<AddTodoForm/>
				</div>
			</div>
		)
	}
});


module.exports = TodoApp;
