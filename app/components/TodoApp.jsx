var React = require('react');
var TodoList = require('TodoList');


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
			]
		}
	},
	render: function(){
		var {todos} = this.state;
		return (
			<div className="medium-6 medium-offset-3 columns">
				<div className="todo-container">
					<TodoList todos={todos}/>
				</div>
			</div>
		)
	}
});


module.exports = TodoApp;
