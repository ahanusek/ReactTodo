var React = require('react')
import Todo from 'Todo';
var {connect} = require('react-redux');

export var TodoList = React.createClass({
	render: function(){
		var {todos} = this.props;
		var renderTodos = () => {
			return todos.map((todo)=>{
				return <Todo key={todo.id} {...todo} />
			})
		};

		return (
			<div>
				{renderTodos()}
			</div>
		)
	}
});




export default connect(
	(state)  => {
		return {
			todos: state.todos
		};
	}
)(TodoList);
